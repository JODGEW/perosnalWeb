// Jump to specific sections
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Comment Section
document.getElementById('writeCommentButton').addEventListener('click', function() {
    var formContainer = document.getElementById('commentFormContainer');
    if (formContainer.style.display === "none") {
        formContainer.style.display = "block";
        // Optionally hide the button after clicking
        this.style.display = "none";
    } else {
        formContainer.style.display = "none";
    }
});

// Chatbot
// Welcome Message
window.onload = function() {
    displayWelcomeMessage();
};

function displayWelcomeMessage() {
    var welcomeMessage = "Welcome to Wenhao He Personal Website! Ask me any question regrading this website! Type 'Info' for more detail about Wenhao.";
    displayMessage("Bot", welcomeMessage);
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default action of the enter key (form submission)
        sendMessage();
    }
});

function sendMessage() {
    var input = document.getElementById("user-input");
    var message = input.value.trim();

    if (message !== "") {
        displayMessage("User", message);
        processUserMessage(message); // Corrected to use processUserMessage
        input.value = ""; // Clear the input field
    }
}

function displayMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageContainer = document.createElement("div");
    var messageElement = document.createElement("div");
    var iconElement = document.createElement("img"); // Use img for icons

    messageElement.textContent = message;
    iconElement.src = sender === "User" ? "user.png" : "bot.png"; // Update paths as needed
    iconElement.alt = sender;

    messageContainer.className = sender === "User" ? "message user-message" : "message bot-message";
    iconElement.className = "message-icon";
    messageElement.className = "message-content";

    messageContainer.appendChild(iconElement);
    messageContainer.appendChild(messageElement);

    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function processUserMessage(message) {
    // Simple keyword-based responses
    var response = "";
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        response = "Hi there! How can I help you today?";
    } else if (message.toLowerCase().includes("help")) {
        response = "Sure, I'm here to help. What do you need assistance with?";
    } else if (message.toLowerCase().includes("thank")) {
        response = "You're welcome!";
    }
    else if (message.toLowerCase().includes("info")) {
        response = "This is Wenhao He personal website! You can find his social media links or any projects he worked on that you are interested in under the project section! Don't forget to leave a message for him under Contact Section!";
    } else {
        response = "I'm not sure how to respond to that. Can you try asking something else?";
    }

    // Simulate a slight delay in response
    setTimeout(function() {
        displayMessage("Bot", response);
    }, 1000);
}
