// script.js

// Smooth scrolling effect for navigation links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Active navigation link highlighting
const navigationLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop;
    navigationLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Animations on scroll
const animatedElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
        } else {
            entry.target.classList.remove('fade-in-active');
        }
    });
});

animatedElements.forEach(el => appearOnScroll.observe(el));