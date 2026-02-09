var before = document.getElementById("before");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var commands = [];
var git = 0;

setTimeout(function() {
    // Detect if mobile and show appropriate banner
    var isMobile = window.innerWidth <= 768;
    loopLines(isMobile ? mobileBanner : banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);
window.addEventListener("touchstart", focusTextarea); // For mobile touch support

// Handle orientation changes and window resizing
var currentWidth = window.innerWidth;
window.addEventListener("resize", function() {
    var newWidth = window.innerWidth;
    // Check if we've crossed the mobile/desktop threshold
    if ((currentWidth <= 768 && newWidth > 768) || (currentWidth > 768 && newWidth <= 768)) {
        currentWidth = newWidth;
    }
});

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
            document.getElementById("command").style.display = "none";
            var duration = loopLines(start, "color2 margin", 80);
            setTimeout(function() {
                // Trigger CRT transition, then redirect after animation
                var overlay = document.getElementById("crt-transition");
                overlay.classList.add("active");
                setTimeout(function() {
                    window.location.href = "./main/index.html";
                }, 1200);
            }, duration + 300);
            break;
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<div class="ascii-art"><a id="before"></a></div>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "banner":
            var isMobile = window.innerWidth <= 768;
            loopLines(isMobile ? mobileBanner : banner, "", 80);
            break;
        default:
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

        var tb = document.getElementById("terminal-body");
        if (tb) {
            tb.scrollTop = tb.scrollHeight;
        } else {
            window.scrollTo(0, document.body.offsetHeight);
        }
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
    return (name.length - 1) * time;
}

var start = [
    "Executing portfolio entry…...",
];

var help = [
    "<br>",
    '<span class="color2">Available commands:</span>',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">start</span>          Enter the portfolio',
    '<span class="command">banner</span>         Display the terminal ASCII banner',
    '<span class="command">help</span>           Display information about built-in commands',
    "<br>",
];

var mobileBanner = [
  "<span class=\"welcome\">Welcome to <span class=\"name\">Wenhao He</span> terminal!</span>",
  "<br>",
  "        ___________________",
  "      .' _________________  '.",
  "     | |                   | |",
  "     | | if __name__==     | |",
  "     | |   \"__main__\":     | |",
  "     | |  print(\"Hello\")   | |",
  "     | |___________________| |",
  "     '._____________________.'",
  "         _____|     |_____",
  "        /_________________\\",
  "<br>",
  "         Wenhao He",
  "<br>",
  "<span class=\"color2\">Type</span> <span class=\"command\">'help'</span> <span class=\"color2\">for commands</span>",
];

var banner = [
  "<span class=\"welcome\">Welcome to <span class=\"name\">Wenhao He</span> Terminal Access.</span>",
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
  "               \"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"|.   .|\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\" `                                ",
  "          ----------------------__|   |__------------------------`--------------          ",
  "         /                     /_________\\.......-----------.     `.            \\         ",
  "        /       _________________________________________    )       `.          \\        ",
  "       /      \"/ .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  ---  \\_.'         _;___       \\       ",
  "      /      \"/ .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-. \\          /\" \\  \\       \\      ",
  "     /      \"/ .-.-. .---.-.-.-.-.--.-.-.-.-.-`__`. .-.-.-.\\         \\\"\"    \\       \\     ",
  "    /      \"/ .-.-. .-----.-.-.-.-.-.-.-.-.-.-.-----. .-.-. \\         \\\"\"    \\       \\    ",
  "   /      \":-------------------------------------------------:         \\\"\"    \\       \\   ",
  "  /       \"`---._.-------------------------------------._.---'          '=---='        \\  ",
  " /                                                                                      \\ ",
  "------------------------------------------------------------------------------------------",
  "             __        __         _                   _   _                       ",
  "             \\ \\      / /__ _ __ | |__   __ _  ___   | | | | ___                 ",
  "              \\ \\ /\\ / / _ \\ '_ \\| '_ \\ / _` |/ _ \\  | |_| |/ _ \\                ",
  "               \\ V  V /  __/ | | | | | | (_| | (_) | |  _  |  __/                ",
  "                \\_/\\_/ \\___|_| |_|_| |_|\\__,_|\\___/  |_| |_|\\___|                ",
  "                                                                                      ",
  "<span class=\"color2\">Type</span> <span class=\"command\">'help'</span><span class=\"color2\"> to see available commands.</span>",
];
