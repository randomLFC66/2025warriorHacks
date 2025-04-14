// Get the form and input elements
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Store conversation history
let conversationHistory = [];

// Listen for form submission
chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent the form from submitting in the default way

    // Get the message from the input field
    const message = userInput.value;

    // Display the user's message in the chat box
    addMessage("You", message);

    // Add user message to history
    conversationHistory.push({
        "role": "user", 
        "content": message
    });

    // Clear the input field
    userInput.value = '';

    // Send the message to the backend
    console.log("Sending full conversation history:", conversationHistory);
    
    const response = await fetch('http://0.0.0.0:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            message: message,
            history: conversationHistory
        })
    });

    // Parse the response from the server
    const data = await response.json();

    // Display the bot's response in the chat box
    addMessage("Bot", data.response);

    // Add bot response to history
    conversationHistory.push({
        "role": "assistant", 
        "content": data.response
    });
});

// Function to add messages to the chat box
function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add initial greeting when page loads
window.addEventListener('DOMContentLoaded', () => {
    addMessage("Bot", "Hello! How are you feeling today?");
});
