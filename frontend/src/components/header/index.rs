use leptonic::prelude::*;
use leptos::*;
use web_sys::MouseEvent;

// use crate::components::utils::get_path;

#[component]
pub fn Header<F>(
    home_view_toggle: F,
    home_view: ReadSignal<bool>,
    database_error: ReadSignal<bool>,
    backend_error: ReadSignal<bool>,
) -> impl IntoView
where
    F: Fn(MouseEvent) + 'static
{
    view! {
        <Box id="header">
            // Title
            <div style="display:flex;align-items:center;">
                <img height="50px" width="50px" src="/images/icon.png" alt="logo"/>
                <H1 style="padding: 0; margin: .25rem .5rem;">"Fireside Chat"</H1>
            </div>
            // button group
            <div id="header-button-group">
                // Toggle Theme
                <button on:click=home_view_toggle>
                    {move || {
                        if database_error.get() || backend_error.get() {
                            "Click to Restart"
                        } else if home_view.get() {
                            "Start Chat"
                        } else {
                            "End Chat"
                        }
                    }}

                </button>
                <ThemeToggle off=LeptonicTheme::Light on=LeptonicTheme::Dark/>
            </div>
        </Box>
    }
}