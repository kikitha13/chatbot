// Notification Alert
function showAlert() {
    alert("உங்களிடம் புதிய அறிவிப்புகள் இல்லை.");
}

// Chatbot Message Processing
function sendMessage() {
    let input = document.getElementById("user-input").value.trim();
    
    if (input !== "") {
        alert("CopBot: உங்கள் கோரிக்கையை செயல்படுத்துகிறது...");
        document.getElementById("user-input").value = "";
    }
}

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}
