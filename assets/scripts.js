
async function init(file) {
    let markdown_text = await get_file(file);
    document.body.innerHTML = marked.parse(markdown_text);
}

function get_file(file) {
    return new Promise(function(resolve) {
        const request = new XMLHttpRequest();
        request.addEventListener("load", request_listener);
        request.open("GET", file);
        request.send();

        function request_listener () {
            resolve(request.responseText)
        }
    })
}
