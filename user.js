document.addEventListener("DOMContentLoaded", function () {
    let selectedLanguage = "english"; // Default language

    document.querySelectorAll(".language-btn").forEach(button => {
        button.addEventListener("click", function () {
            selectedLanguage = this.value;
            document.querySelectorAll(".language-btn").forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    document.getElementById("confirm-language").addEventListener("click", function () {
        let pageMap = {
            "english": "customerenglish.html",
            "tamil": "customertamil.html",
            "hindi": "customerhindi.html",
            "telugu": "customertelugu.html"
        };

        if (selectedLanguage in pageMap) {
            window.location.href = pageMap[selectedLanguage];
        }
    });
});
