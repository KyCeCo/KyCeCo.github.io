const button = document.getElementById("modeButton");

button.addEventListener("click", function() {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Night Mode";
    }
});
