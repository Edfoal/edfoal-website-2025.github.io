// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
