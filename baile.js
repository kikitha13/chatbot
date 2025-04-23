document.getElementById("bailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let applicantName = document.getElementById("applicantName").value.trim();
    let applicantPhone = document.getElementById("applicantPhone").value.trim();
    let applicantAddress = document.getElementById("applicantAddress").value.trim();
    let crimeDetails = document.getElementById("crimeDetails").value.trim();
    let bailReason = document.getElementById("bailReason").value.trim();
    let bailType = document.getElementById("bailType").value;
    
    if (!applicantName || !applicantPhone || !applicantAddress || !crimeDetails || !bailReason) {
        alert("Please fill in all required fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(applicantPhone)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }

    alert("Bail Application Submitted Successfully!");
    window.location.href = "customerenglish.html"; // Redirect to customer page after submission
});

// Show extra fields for Police Bail
document.getElementById("bailType").addEventListener("change", function() {
    let policeBailDetails = document.getElementById("policeBailDetails");
    if (this.value === "police") {
        policeBailDetails.classList.remove("hidden");
    } else {
        policeBailDetails.classList.add("hidden");
    }
});
