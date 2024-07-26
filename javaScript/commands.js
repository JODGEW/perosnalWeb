var before = document.getElementById("before");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var commands = [];
var git = 0;

setTimeout(function() {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);
window.addEventListener("touchstart", focusTextarea); // For mobile touch support

textarea.value = "";
command.innerHTML = textarea.value;

function focusTextarea() {
    textarea.focus();
}

function enterKey(e) {
    if (e.keyCode == 13 || e.type === "touchstart") { // Handle enter key and touch events
        var cmd = command.innerHTML.trim().toLowerCase();
        commands.push(cmd);
        git = commands.length;
        
        console.log("Processed command:", cmd); // See the command after processing
        addLine("visitor@wenhaohe:~$ " + cmd, "no-animation", 0);

        commander(cmd);
        command.innerHTML = "";
        textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

function commander(cmd) {
    cmd = cmd.replace(/<br>/g, '').trim(); // Remove any HTML line breaks and trim whitespace
    console.log("Command received by commander: " + cmd);
    switch (cmd) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "start":
            loopLines(start, "color2 margin", 80);
            setTimeout(function() {
                window.location.href = "./main.html";
            }, 1000); // Wait 1 second before redirecting
            break;
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            loopLines(banner, "", 80);
            break;
        default:
            console.log("Unknown command: " + cmd);
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}

var start = [
    "Navigating to the main page...",
];

var help = [
    "<br>",
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">start</span>          Start exploring my main page',
    '<span class="command">banner</span>         Display the terminal ASCII banner',
    '<span class="command">help</span>           Display infomationn about builtin commands',
    "<br>",
];

var banner = [
  '<span class="index">Welcome to Wenhao He terminal access page! All rights reserved.</span>',
  "                 _________________________________________                                 ",
  "               .'  _____________________________________  '.                               ",
  "              \"| .'                                     '. |                               ",
  "              \"| |                                       | |                               ",
  "              \"| |                                       | |                               ",
  "              \"| |      if __name__ == \"__main__\":       | |                               ",
  "              \"| |          print(\"Hello, World!\")       | |                               ",
  "              \"| |                                       | |                               ",
  "              \"| |                                       | |                               ",
  "              \"| '._____________________________________.' |`*.                           ",
  "              \"'._________________________________________.'   `.                         ",
  "               \"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"|.   .|\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"      '                         ",
  "          ----------------------__|   |__------------------------`--------------          ",
  "         /                     /_________\\.......-----------.     `.            \\         ",
  "        /       _________________________________________    )       `.          \\        ",
  "       /      \"/ .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  ---  \\_.'         _;___       \\       ",
  "      /      \"/ .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-. \\          /\" \\  \\       \\      ",
  "     /      \"/ .-.-. .---.-.-.-.-.--.-.-.-.-.-`__`. .-.-.-.\\         \\\"\"    \\       \\     ",
  "    /      \"/ .-.-. .-----.-.-.-.-.-.-.-.-.-.-.-----. .-.-. \\         \\\"\"    \\       \\    ",
  "   /      \":-------------------------------------------------:         \\\"\"    \\       \\   ",
  "  /       \"`---._.-------------------------------------._.---'          '=---='        \\  ",
  " /                                                                                       \\ ",
  "------------------------------------------------------------------------------------------",
  "                     __        __         _                   _   _                    ",
  "                     \\ \\      / /__ _ __ | |__   __ _  ___   | | | | ___              ",
  "                      \\ \\ /\\ / / _ \\ '_ \\| '_ \\ / _` |/ _ \\  | |_| |/ _ \\             ",
  "                       \\ V  V /  __/ | | | | | | (_| | (_) | |  _  |  __/             ",
  "                        \\_/\\_/ \\___|_| |_|_| |_|\\__,_|\\___/  |_| |_|\\___|             ",
  "                                                                                      ",
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];
