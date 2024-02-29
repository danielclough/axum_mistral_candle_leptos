use common::llm::model_list::{ModelArgs, ModelDLList};
use leptonic::modal::{Modal, ModalBody, ModalHeader, ModalTitle};
use leptos::{component, create_signal, view, IntoView, Signal, WriteSignal};

use crate::components::home::model_config::model_list_container::ModelListContainer;

#[component]
pub fn InitModelModal(
    #[prop(into)] show_when: Signal<bool>,
    model_args: ModelArgs,
    model_list: ModelDLList,
    ipv4: Signal<String>,
    gpu_type: Signal<String>,
    set_gpu_type: WriteSignal<String>,
    set_refresh_token: WriteSignal<i32>,
) -> impl IntoView {
    let (model_list_signal, _set_model_list_signal) = create_signal(model_list);
    let (model_args_signal, _set_model_args_signal) = create_signal(model_args);
    view! {
        <Modal show_when=show_when on_escape=move || {}>
            <ModalHeader>
                <ModalTitle>"Choose a Model!"</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <ModelListContainer
                    ipv4=ipv4
                    model_args=model_args_signal
                    model_list=model_list_signal
                    gpu_type=gpu_type
                    set_gpu_type=set_gpu_type
                    set_refresh_token=set_refresh_token
                />
            </ModalBody>
        </Modal>
    }
}