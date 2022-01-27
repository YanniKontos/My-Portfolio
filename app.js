const menu_btn = document.querySelector('.hamburger');
const navItems = document.getElementById('nav-items');
const btn = document.getElementById('burger');

function showNavItems () {
    btn.classList.toggle('is-active');
    navItems.classList.toggle('is-active');
}