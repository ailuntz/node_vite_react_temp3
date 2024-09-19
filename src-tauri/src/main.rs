mod setup;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(setup::init)
        .run(context)
        .expect("error while running OhMyBox application");
}
