document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.partner-logo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0.8';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    logos.forEach(logo => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = 'all 0.5s ease';
        observer.observe(logo);
    });
});
// Simple carousel functionality
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

//Test
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.querySelector('.testimonial-cards');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let scrollAmount = 320; // Card width including margin

    // Scroll Left & Right Buttons
    nextBtn.addEventListener('click', () => {
        cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        cardsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Auto Scroll Feature
    function autoScroll() {
        if (cardsContainer.scrollLeft + cardsContainer.clientWidth >= cardsContainer.scrollWidth) {
            cardsContainer.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
        } else {
            cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    setInterval(autoScroll, 30000); // Move automatically every 3 seconds
});

//Industries
const carousel = document.querySelector('.industriescarousel');
const cards = document.querySelectorAll('.industry-card');
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);
    });
    // carousel.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 0)}px)`; // Adjusted for 195px gap
}

function autoScroll() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

setInterval(autoScroll, 3000);

// Banner
// Add smooth scroll behavior for the CTA button
document.querySelector('.banner-cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    // Add your navigation logic here
});

//Footer
document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// About Us Team member 
document.querySelector('.connect-btn').addEventListener('click', function () {
    alert('Thank you for connecting with us!');
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Hamburger toggle
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu and set active link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Close mobile menu
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove("active"));

            // Add active class to clicked link
            this.classList.add("active");
        });
    });
});