// Toggle Navigation Menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Thumbs Up/Down Functionality
document.querySelectorAll('.thumbs span').forEach(span => {
    span.addEventListener('click', () => {
        let count = span.nextElementSibling;
        count.textContent = parseInt(count.textContent) + 1;
    });
});


