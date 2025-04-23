// Notification Alert
function showAlert() {
    alert("You have no new notifications.");
}

// Chatbot Message Processing
function sendMessage() {
    let input = document.getElementById("user-input").value.trim();
    
    if (input !== "") {
        alert("CopBot: Processing your request...");
        document.getElementById("user-input").value = "";
    }
}

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}
