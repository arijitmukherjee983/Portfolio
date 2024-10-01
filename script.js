// Smooth Scroll for Navigation
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Effect for Sections on Scroll
const fadeInSections = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeInSections.forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-opacity', 'duration-700');
    fadeInObserver.observe(section);
});
