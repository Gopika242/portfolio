document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const typingText = document.getElementById("typing-text");
    const words = ["Full-Stack Developer", "AI Enthusiast", "Tech Explorer"];
    let wordIndex = 0;
    let charIndex = 0;
    function typeEffect() {
        if (charIndex < words[wordIndex].length) {
            typingText.innerHTML += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 2000);
        }
    }
    function eraseEffect() {
        if (charIndex > 0) {
            typingText.innerHTML = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }
    typeEffect();

    // Smooth Scroll
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
});
