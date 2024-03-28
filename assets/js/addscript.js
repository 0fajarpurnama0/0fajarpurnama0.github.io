function addscriptsrc(scriptUrl) {
    // Create a new script element
    let scriptElement = document.createElement("script");

    // Set the src attribute to the URL from the JSON object
    scriptElement.src = scriptUrl;

    // Append the script element to the document's head or body
    document.head.appendChild(scriptElement);
}