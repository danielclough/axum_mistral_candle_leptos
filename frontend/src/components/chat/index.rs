use common::database::{
    conversation::{ConversationForJson, NewConversation},
    engagement::NewEngagement,
    user::UserForJson,
};
use leptonic::{prelude::Box,toast::{Toast, ToastTimeout, ToastVariant, Toasts}}; 
use leptos::{html::Textarea, *};
use leptos_use::{use_websocket, UseWebsocketReturn};
use uuid::Uuid;
use web_sys::KeyboardEvent;

use crate::{
    components::chat::message::ChatMessage,
    functions::{
        chat::{chat_message_state, scroll_down, update_history, ChatMessageState},
        get_path::get_llm_path,
        rest::{conversation::post_new_conversation, engagement::post_new_engagement},
    },
};

#[component]
pub fn ChatBox(user: Signal<UserForJson>, ipv4: Signal<String>, set_home_view: WriteSignal<bool>) -> impl IntoView {
    let (history, set_history) = create_signal::<Vec<String>>(vec![]);
    let (username_unset, set_username_unset) = create_signal(true);
    let (response, set_response) = create_signal::<Option<String>>(None);
    let (query, set_query) = create_signal::<Option<String>>(None);
    let (conversation, set_conversation) = create_signal::<Option<ConversationForJson>>(None);
    let (input_string, set_input_string) = create_signal(String::new());
    let (time_to_send, set_time_to_send) = create_signal(false);
    let (text_area_height, set_text_area_height) = create_signal(1);

    // chat_message_state_signal
    let (chat_message_state_signal, set_chat_message_state_signal) =
        create_signal(ChatMessageState::Waiting);

    // Toast send query success or error
    let toasts = expect_context::<Toasts>();

    // Instantiate addr websocket_server_address with .env or default values.
    let websocket_server_address = get_llm_path("websocket", ipv4.get());

    let UseWebsocketReturn {
        ready_state,
        message,
        send,
        // open,
        // close,
        ..
    } = use_websocket(&websocket_server_address);

    let input_element: NodeRef<Textarea> = create_node_ref();
    let input_str = String::new();

    let status = move || ready_state.get().to_string();

    // let connected = move || ready_state.get() == ConnectionReadyState::Open;

    // let open_connection = move |_| {
    //     open();
    //     let input_element = input_element.get().expect("<input> to exist");
    //     input_element.set_placeholder("Enter Username");
    //     input_element.set_value(&user.get().name)
    // };
    // let close_connection = move |_| {
    //     close();
    //     let input_element = input_element.get().expect("<input> to exist");
    //     input_element.set_placeholder("Enter Username");
    //     input_element.set_value(&user.get().name)
    // };

    let send_message = move |e: KeyboardEvent| {
        if e.key() == "Enter" && !e.shift_key() {
            let input_element = input_element.get().expect("<input> to exist");
            set_input_string.set(input_element.value());
            set_time_to_send.set(true);
            input_element.set_value("");
        } else if e.key() == "Enter" && e.shift_key() {
            let input_element = input_element.get().expect("<input> to exist");
            let n_lines = input_element.value().split("\\n").collect::<String>().len();
            set_text_area_height.set(n_lines+2)
        }
    };
    
    // send when time_to_send
    create_effect(move |_| 
        // register username
        if username_unset.get() {
            leptos_dom::log!("Trying to set inside");
            set_input_string.update(|x| *x = user.get().name);
            send(input_string.get().as_str());
        } else if time_to_send.get() {
            // send regular messages
            leptos_dom::log!("Sending");
            send(input_string.get().as_str());
            set_time_to_send.set(false);
            set_input_string.set(String::new());
        }
    );

    // Return to home view if connection closes
    create_effect(move |_| 
        if status() == "Closed" {
            set_home_view.set(true);
        }
    );

    create_effect(move |_| {
        if let Some(m) = message.get() {
            set_chat_message_state_signal.set(chat_message_state(&m, user.get().name));

            match chat_message_state_signal.get() {
                ChatMessageState::Join => {
                    set_username_unset.set(false);
                }
                ChatMessageState::Coming => {
                    toasts.push(Toast {
                        id: Uuid::new_v4(),
                        created_at: time::OffsetDateTime::now_utc(),
                        variant: ToastVariant::Success,
                        header: "Received!".to_owned().into_view(),
                        body: "Your response will be sent shortly!".to_owned().into_view(),
                        timeout: ToastTimeout::DefaultDelay,
                    });
                }
                ChatMessageState::User => {
                    // add query to state
                    logging::log!("Set Query");
                    set_query.set(Some(m.to_string()));

                    // TODO -- Add params as csv
                    if conversation.get().is_none() {
                        // New Conversation if None
                        spawn_local(async move {
                            logging::log!("New Conversation");
                            let remove_string = format!("{}: ", user.get().name);
                            let new_conversation = post_new_conversation(
                                user.get().id,
                                NewConversation {
                                    name: query
                                        .get()
                                        .expect("query state is some")
                                        .replace(&remove_string, ""),
                                    user_id: user.get().id,
                                    model_params: String::new(),
                                    inference_params: String::new(),
                                },
                            )
                            .await;

                            // prepare for message by setting values
                            logging::log!("Set Conversation");
                            set_conversation.set(Some(new_conversation));
                        });
                    }
                }
                ChatMessageState::Error => {
                    toasts.push(Toast {
                        id: Uuid::new_v4(),
                        created_at: time::OffsetDateTime::now_utc(),
                        variant: ToastVariant::Error,
                        header: query.get_untracked().into_view(),
                        body: response.get_untracked().into_view(),
                        timeout: ToastTimeout::DefaultDelay,
                    });
                    // push to screen but don't add to db
                    update_history(&set_history, query.get().unwrap(), user);
                    update_history(&set_history, response.get().unwrap(), user);
                    // prepare for message by clearing values
                    set_response.set(None);
                    set_query.set(None);
                    scroll_down();
                }
                ChatMessageState::Bot => {
                    // add response to state
                    set_response.set(Some(m.to_string()));
                    if conversation.get().is_none() {
                        // New Conversation if None
                    } else {
                        // New Engagement if Conversation is Some
                        spawn_local(async move {
                            if response.get().is_some() {
                                logging::log!("Add Engagement");
                                let _new_engagement = post_new_engagement(NewEngagement {
                                    conversation_id: conversation.get().unwrap().id,
                                    query: query.get().expect("query state is some"),
                                    response: response.get().expect("query state is some"),
                                })
                                .await;
                                // Spawn in order to do last
                                spawn_local(async move {
                                    if query.get().is_some() && response.get().is_some() {
                                        // push to screen
                                        update_history(&set_history, query.get().unwrap(), user);
                                        update_history(&set_history, response.get().unwrap(), user);

                                        logging::log!("Reset Values in Engagement section");
                                        // prepare for message by clearing values
                                        logging::log!("Set Response");
                                        set_response.set(None);
                                        logging::log!("Set Query");
                                        set_query.set(None);

                                        // Scroll into view
                                        scroll_down();
                                    }
                                })
                            }
                        });
                    }
                }
                _ => {
                    println!("Error")
                }
            }
        };
    });

    view! {
        <Box class="outer-container">
            // moving here allows it work
            <div class="hidden">{move || time_to_send}</div>
            <div id="chat-box" class="outer-container">
                <For
                    each=move || history.get().into_iter().enumerate()
                    key=|(index, _)| *index
                    let:item
                >
                    <ChatMessage user=user index=item.0 text=item.1/>
                </For>
            </div>

            {move || {
                if username_unset.get() {
                    "Register Username on Server! ".to_string()
                } else {
                    format!("Chatting as: {}", user.get().name)
                }
            }}

            <textarea
                rows=move || text_area_height.get()
                type="text"
                name="input"
                id="chat-box-input"
                placeholder="Enter Prompt"
                value=input_str
                on:keydown=send_message
                disabled=move || chat_message_state_signal.get() == ChatMessageState::Coming
                node_ref=input_element
            ></textarea>
            <Box id="btn-row">
                // <button
                // style:display=move || {
                // (if status() == "Open" { "none" } else { "block" }).to_string()
                // }

                // on:click=open_connection
                // disabled=connected
                // >
                // "Join"
                // </button>
                // <button
                // style:display=move || {
                // (if status() == "Closed" { "none" } else { "block" }).to_string()
                // }

                // on:click=close_connection
                // disabled=move || !connected()
                // >
                // "Close"
                // </button>
                <div>
                    <button
                        on:click=move |_| {
                            set_history.set(vec![]);
                            set_conversation.set(None)
                        }

                        disabled=move || history.get().is_empty()
                        style=move || {
                            if history.get().is_empty() {
                                "display:none;"
                            } else {
                                "position: absolute;right: 0;top: 0;"
                            }
                        }
                    >

                        "New Conversation"
                    </button>
                </div>

                {move || {
                    if !username_unset.get() && conversation.get().is_none() {
                        "Ready to Go!".to_string()
                    } else if username_unset.get() {
                        String::new()
                    } else {
                        format!("Title: {}", conversation.get().unwrap().name)
                    }
                }}

            </Box>
        </Box>
    }
}