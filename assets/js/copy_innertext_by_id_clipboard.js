function copy_innertext_by_id_clipboard(id) {
    // Get the text field
    const copyText = document.getElementById(id);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
}