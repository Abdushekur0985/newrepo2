
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active'); // Added for animation
});

// test comment
