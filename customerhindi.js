// Notification Alert
function showAlert() {
    alert("आपके पास कोई नया नोटिफिकेशन नहीं है।");
}

// Chatbot Message Processing
function sendMessage() {
    let input = document.getElementById("user-input").value.trim();
    
    if (input !== "") {
        alert("CopBot: आपकी रिक्वेस्ट प्रोसेस कर रहा है...");
        document.getElementById("user-input").value = "";
    }
}

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}
