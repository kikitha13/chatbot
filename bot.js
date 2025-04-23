// Function to show the selected sign-up form
function showSignUp(role) {
    document.getElementById("role-selection").style.display = "none";
    
    if (role === 'police') {
        document.getElementById("police-signup").style.display = "block";
    } else {
        document.getElementById("citizen-signup").style.display = "block";
    }
}

// Function to handle OTP sending (Dummy)
function sendOTP(phoneField) {
    let phoneNumber = document.getElementById(phoneField).value;
    if (phoneNumber) {
        alert("OTP sent to " + phoneNumber);
    } else {
        alert("Please enter a phone number first.");
    }
}

// Function to handle form submission and navigate to login page
function submitForm(role) {
    alert(role.charAt(0).toUpperCase() + role.slice(1) + " Sign-Up Successful!");
    window.location.href = "login.html"; // Navigate to login page
}
