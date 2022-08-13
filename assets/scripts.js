
async function init(file, id) {
    let markdown_text = await get_file(file);
    document.getElementById(id).innerHTML += marked.parse(markdown_text);
}

async function get_events() {
    let events      = await get_json("/assets/events.json");
    let str         = "";
    let primary     = "";
    let secondary   = "";
    let teriary     = "";
    for (var i = 0; i < events.events.length; i++) {
        primary     = "";
        secondary   = "";
        teriary     = "";
        switch (events[events.events[i]].colors.primary) {
            case "BLUE":
                primary = "background_blue";
                break;
            case "GREEN":
                primary = "background_green";
                break;
            case "RED":
                primary = "background_red";
                break;
            case "PINK":
                primary = "background_pink";
                break;
            case "YELLOW":
                primary = "background_yellow";
                break;
            case null:
                primary = "background_blue";
                break;
        }
        switch (events[events.events[i]].colors.secondary) {
            case "BLUE":
                secondary = "background_blue";
                break;
            case "GREEN":
                secondary = "background_green";
                break;
            case "RED":
                secondary = "background_red";
                break;
            case "PINK":
                secondary = "background_pink";
                break;
            case "YELLOW":
                secondary = "background_yellow";
                break;
            case null:
                secondary = primary;
                break;
        }
        switch (events[events.events[i]].colors.teriary) {
            case "BLUE":
                teriary = "background_blue";
                break;
            case "GREEN":
                teriary = "background_green";
                break;
            case "RED":
                teriary = "background_red";
                break;
            case "PINK":
                teriary = "background_pink";
                break;
            case "YELLOW":
                teriary = "background_yellow";
                break;
            case null:
                teriary = secondary;
                break;
        }
        for (var j = 0; j < 2; j++) {
            switch (j) {
                case 0:
                    platform = "mobile";
                    colspan = 1;
                    break;
                case 1:
                    platform = "desktop";
                    colspan = 3;
                    break;
            }
            let events_list = document.getElementById(platform + "_events_list");
            if (platform == "mobile") {
                str = `<tr><td colspan="` + colspan + `"><a class="button ` + primary + `" onclick="window.location.href='/events/` + events[events.events[i]] + `'">
                <div class="button_text center">
                    <div class="home_button_day">` + events[events.events[i]].day + `</div>
                    <div class="home_button_date">` + events[events.events[i]].date + `</div>
                </div>
                <div class="` + secondary + ` button_text left">
                    <div class="home_button_description">` + events[events.events[i]].name + `</div>
                    <div class="home_button_description">` + events[events.events[i]].location + `</div>
                    <div class="home_button_description">` + events[events.events[i]].time + `</div>
                </div></a></td></tr>`;
                events_list.children[0].innerHTML += str;
            }
            else {
                str = `<td colspan="` + colspan + `"><a class="button ` + primary + `" onclick="window.location.href='/events/` + events[events.events[i]] + `'">
                <div class="button_text center">
                    <div class="home_button_day">` + events[events.events[i]].day + `</div>
                    <div class="home_button_date">` + events[events.events[i]].date + `</div>
                </div>
                <div class="` + secondary + ` button_text left">
                    <div class="home_button_description">` + events[events.events[i]].name + `</div>
                    <div class="home_button_description">` + events[events.events[i]].location + `</div>
                    <div class="home_button_description">` + events[events.events[i]].time + `</div>
                </div></a></td>`;
                events_list.children[0].children[0].innerHTML += str;
            }
        }
    }
}

async function get_camp() {
    let events      = await get_json("/assets/camp.json");
    let str         = "";
    let primary     = "";
    let secondary   = "";
    let teriary     = "";
    let platform    = "";
    let colspan     = 0;
    for (var i = 0; i < events.events.length; i++) {
        primary     = "";
        secondary   = "";
        teriary     = "";
        switch (events[events.events[i]].colors.primary) {
            case "BLUE":
                primary = "background_blue";
                break;
            case "GREEN":
                primary = "background_green";
                break;
            case "RED":
                primary = "background_red";
                break;
            case "PINK":
                primary = "background_pink";
                break;
            case "YELLOW":
                primary = "background_yellow";
                break;
            case null:
                primary = "background_blue";
                break;
        }
        switch (events[events.events[i]].colors.secondary) {
            case "BLUE":
                secondary = "background_blue";
                break;
            case "GREEN":
                secondary = "background_green";
                break;
            case "RED":
                secondary = "background_red";
                break;
            case "PINK":
                secondary = "background_pink";
                break;
            case "YELLOW":
                secondary = "background_yellow";
                break;
            case null:
                secondary = primary;
                break;
        }
        switch (events[events.events[i]].colors.teriary) {
            case "BLUE":
                teriary = "background_blue";
                break;
            case "GREEN":
                teriary = "background_green";
                break;
            case "RED":
                teriary = "background_red";
                break;
            case "PINK":
                teriary = "background_pink";
                break;
            case "YELLOW":
                teriary = "background_yellow";
                break;
            case null:
                teriary = secondary;
                break;
        }
        for (var j = 0; j < 2; j++) {
            switch (j) {
                case 0:
                    platform = "mobile";
                    colspan = 1;
                    break;
                case 1:
                    platform = "desktop";
                    colspan = 3;
                    break;
            }
            let events_list = document.getElementById(platform + "_camp_list");
            str = `<td colspan="` + colspan + `">
            <a class="button ` + primary + `" onclick="window.location.href='/events/` + events.events[i] + `'">
                <div class="button_text center">
                    <div class="home_button_day">` + events[events.events[i]].name + `</div>
                    <div class="home_button_date">` + events[events.events[i]].description + `</div>
                </div>
                <div class="` + primary + ` invert button_text fill center">
                    <div class="home_button_description">` + events[events.events[i]].date + `</div>
                    <div class="home_button_description">` + events[events.events[i]].days + `</div>
                    <div class="home_button_description">` + events[events.events[i]].location + `</div>
                </div>
            </a></td>`;
            console.log(events_list);
            if (platform == "mobile") {
                events_list.children[0].children[1].innerHTML += str;
            }
            else {
                events_list.children[0].children[0].innerHTML += str;
            }
        }
    }
}

async function get_album() {
    let images      = await get_json("./images.json");
    let str         = "<table>";
    let n = images.images.length;
    var m = 0;
    for (var i = 0; i < images.images.length; i++) {
        if (i % 3 == 0) {
            str += "<tr>";
        }
        str += `<td>
        <div class="home_button">
            <div class="background_white home_button_header center">
                <img id="` + i + `" src="` + images.images[i].src + `" description="` + images.images[i].description + `" onclick="show_image(this)">
            </div>
        </div></td>`;
        if (i % 3 == 2) {
            str += "</tr>";
        }
    }
    let album = document.getElementById("footer");
    album.innerHTML += str;
}

function get_file(file) {
    return new Promise(function(resolve) {
        const request = new XMLHttpRequest();
        request.addEventListener("load", request_listener);
        request.open("GET", file);
        request.send();

        function request_listener () {
            resolve(request.responseText);
        }
    })
}

function get_json(file) {
    return new Promise(function(resolve) {
        const request = new XMLHttpRequest();
        request.addEventListener("load", request_listener);
        request.open("GET", file);
        request.send();

        function request_listener () {
            resolve(JSON.parse(request.responseText));
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
