/* =========================================
   1. MOBILE MENU TOGGLE
   ========================================= */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

/* =========================================
   2. TYPEWRITER EFFECT
   ========================================= */
const typeTextSpan = document.querySelector(".typewriter");
const cursorSpan = document.querySelector(".cursor");

if (typeTextSpan) {
    const textArray = ["Penetration Tester", "SOC Analyst", "GRC Specialist", "Threat Hunter"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typeTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typeTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    });
}

/* =========================================
   3. PARTICLE NETWORK CONFIG
   ========================================= */
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00ff41" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00ff41",
                "opacity": 0.2,
                "width": 1
            },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } } }
        },
        "retina_detect": true
    });
}

/* =========================================
   4. CTF EASTER EGG (Console)
   ========================================= */
setTimeout(() => {
    console.log("%cSTOP! Restricted Area.", "color: red; font-size: 18px; font-weight: bold;");
    console.log("Just kidding. But since you're poking around, here's a flag for you:");
    console.log("%cflag{y0u_h4v3_3nt3r3d_th3_m4tr1x}", "color: #00ff41; font-family: 'Courier New', monospace; font-size: 16px; background: #0d1117; padding: 4px 8px; border-radius: 4px; border: 1px solid #00ff41;");
    console.log("Keep hacking! 🕵️‍♂️");
}, 1000);