function $(elid) {
    return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
    cursor = $("cursor");
    cursor.style.left = "0px";
    $("texter").focus();
}

function nl2br(txt) {
    return txt.replace(/\n/g, '<br/>');
}

// Function to update the display as the user types
function typeIt(from, e) {
    e = e || window.event;
    var w = document.getElementById("typer");
    var tw = from.value;
    w.innerHTML = nl2br(tw); // Directly update without checking 'pw'
}

// Function to move the cursor
function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    var cursor = document.getElementById("cursor");
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

function alert(txt) {
    console.log(txt);
}
