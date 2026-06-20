// Typed.js animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// FIX: Close navbar when any nav link is clicked on mobile
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// FIX: Close navbar when user taps anywhere outside the menu on mobile
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove("active");
    }
});