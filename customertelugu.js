// Notification Alert
function showAlert() {
    alert("మీకు కొత్త నోటిఫికేషన్లు లేవు.");
}

// Chatbot Message Processing
function sendMessage() {
    let input = document.getElementById("user-input").value.trim();
    
    if (input !== "") {
        alert("CopBot: మీ అభ్యర్థనను ప్రాసెస్ చేస్తున్నాం...");
        document.getElementById("user-input").value = "";
    }
}

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}
