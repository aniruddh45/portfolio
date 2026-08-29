// ================= TYPING EFFECT =================

const words = [
    "ASPIRING DEVELOPER",
    "PROBLEM SOLVER",
    "TECH EXPLORER",
    "CREATIVE BUILDER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= LEETCODE COUNTER =================

const counter = document.getElementById("problemCounter");

let hasCounted = false;

function startCounter() {

    const achievement =
        document.getElementById("achievement");

    const position =
        achievement.getBoundingClientRect().top;

    if (
        position < window.innerHeight - 100 &&
        !hasCounted
    ) {

        hasCounted = true;

        let count = 0;
        const target = 50;

        const interval = setInterval(() => {

            count++;

            counter.textContent = count;

            if (count >= target) {
                clearInterval(interval);
            }

        }, 30);

    }

}

window.addEventListener("scroll", startCounter);

startCounter();