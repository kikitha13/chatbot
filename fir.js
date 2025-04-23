document.getElementById('firForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple validation check
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const crimeType = document.getElementById('crimeType').value;
    const details = document.getElementById('details').value;
    const datetime = document.getElementById('datetime').value;

    if (!name || !email || !phone || !address || !crimeType || !details || !datetime) {
        alert('Please fill out all required fields.');
        return;
    }

    alert('FIR Submitted Successfully!');
    window.location.href = 'customerenglish.html'; // Redirect to confirmation page
});
