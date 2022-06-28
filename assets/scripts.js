
async function init(file, id) {
    let markdown_text = await get_file(file);
    document.getElementById(id).innerHTML += marked.parse(markdown_text);
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

function show_image(image) {
    document.getElementById("modal_image").setAttribute("src", image.getAttribute("src"));
    document.getElementById("modal_caption").innerHTML = image.getAttribute("description");
    document.getElementById("modal").style.display = "block";
}

function hide_image() {
    document.getElementById("modal").style.display = "none";
}
