function login() {
    let userType = document.getElementById("userType").value;
    let loginCredential = document.getElementById("loginCredential").value;
    let loginPassword = document.getElementById("loginPassword").value;

    // Dummy login validation (Replace this with actual backend validation)
    if (loginCredential.trim() === "" || loginPassword.trim() === "") {
        alert("Please enter both credentials.");
        return;
    }

    // Simulating successful login
    alert(userType.charAt(0).toUpperCase() + userType.slice(1) + " login successful!");

    // Redirect to user page
    window.location.href = "user.html";
}
