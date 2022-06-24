
function init(file) {
    let markdown_text = get_file(file);
    console.log(markdown_text);
    document.getElementById("body").innerHTML += marked.parse(markdown_text);
}

function get_file(file) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", file, true);
    xmlhttp.send();
}
