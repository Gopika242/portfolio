document.addEventListener("DOMContentLoaded", function () {
    // ✅ Typing Effect
    const typingText = document.getElementById("typing-text");
    if (typingText) {
        const words = ["Full-Stack Developer", "AI Enthusiast", "Tech Explorer"];
        let wordIndex = 0, charIndex = 0;
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
    }

    // ✅ Smooth Scroll
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ✅ Dark Mode Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // ✅ Scroll Reveal
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal("[data-sr]", {
            duration: 1000,
            distance: "50px",
            origin: "bottom",
            easing: "ease-in-out"
        });
    } else {
        console.error("ScrollReveal is not defined. Check if the script is loaded.");
    }

    // ✅ Animated Neon Circle Outlines
    const canvas2 = document.getElementById("animatedBackground");
    if (canvas2) {
        const ctx2 = canvas2.getContext("2d");
        canvas2.width = window.innerWidth;
        canvas2.height = window.innerHeight;
        const circles = [];
        const numCircles = 30;
        function createCircle() {
            return {
                x: Math.random() * canvas2.width,
                y: Math.random() * canvas2.height,
                radius: Math.random() * 40 + 20,
                dx: (Math.random() - 0.5) * 1.5,
                dy: (Math.random() - 0.5) * 1.5,
            };
        }
        for (let i = 0; i < numCircles; i++) {
            circles.push(createCircle());
        }
        function animateCircles() {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            for (let circle of circles) {
                circle.x += circle.dx;
                circle.y += circle.dy;
                if (circle.x - circle.radius < 0 || circle.x + circle.radius > canvas2.width) circle.dx *= -1;
                if (circle.y - circle.radius < 0 || circle.y + circle.radius > canvas2.height) circle.dy *= -1;
                ctx2.beginPath();
                ctx2.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
                ctx2.strokeStyle = "rgba(74, 74, 75, 0.8)";
                ctx2.lineWidth = 3;
                ctx2.shadowBlur = 10;
                ctx2.shadowColor = "rgba(74, 74, 75, 0.8)";
                ctx2.stroke();
                ctx2.closePath();
            }
            requestAnimationFrame(animateCircles);
        }
        window.addEventListener("resize", () => {
            canvas2.width = window.innerWidth;
            canvas2.height = window.innerHeight;
        });
        animateCircles();
    }
});
