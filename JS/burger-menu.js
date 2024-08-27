// JavaScript for Burger Menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMobile = document.getElementById('nav-mobile');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMobile.classList.toggle('active');
    });
});
