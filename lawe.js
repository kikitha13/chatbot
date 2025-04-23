document.getElementById("crimeType").addEventListener("change", function() {
    let selectedCrime = this.value;
    let lawDetails = document.getElementById("lawDetails");

    const ipcLaws = {
        "murder": "IPC Section 302: Punishment for murder - Death penalty or life imprisonment.",
        "theft": "IPC Section 378: Punishment for theft - Up to 3 years in prison or fine, or both.",
        "cybercrime": "IPC Section 66A: Cybercrime punishment - Up to 3 years in jail and fine.",
        "assault": "IPC Section 351: Punishment for assault - Up to 3 months in jail or fine.",
        "fraud": "IPC Section 420: Punishment for cheating and fraud - Up to 7 years in jail and fine."
    };

    lawDetails.textContent = ipcLaws[selectedCrime] || "Select a crime to view details.";
});

// Search Functionality
document.getElementById("searchLaw").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let lawDetails = document.getElementById("lawDetails");

    const ipcSearch = {
        "302": "IPC Section 302: Punishment for murder - Death penalty or life imprisonment.",
        "378": "IPC Section 378: Punishment for theft - Up to 3 years in prison or fine, or both.",
        "66a": "IPC Section 66A: Cybercrime punishment - Up to 3 years in jail and fine.",
        "351": "IPC Section 351: Punishment for assault - Up to 3 months in jail or fine.",
        "420": "IPC Section 420: Punishment for cheating and fraud - Up to 7 years in jail and fine."
    };

    lawDetails.textContent = ipcSearch[query] || "Enter a valid IPC section.";
});
