document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotToggleIcon = document.getElementById("chatbot-toggle-icon");

    // Hide the chatbot container initially
    chatbotContainer.style.display = "none";

    // Toggle chatbot visibility when the icon is clicked
    chatbotToggleIcon.addEventListener("click", function () {
        if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
            chatbotContainer.style.display = "block";
        } else {
            chatbotContainer.style.display = "none";
        }
    });

    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            // You can send the message to your backend or display it in the chatMessages div.
            const messageText = `${name} (${email}): ${message}`;
            const messageElement = document.createElement("div");
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);

            // Clear the input fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    });
});
