const navItems = document.getElementById('nav-items');
const btn = document.getElementById('burger');
const mainPage = document.getElementById('main-page');

function showNavItems () {
    btn.classList.toggle('active');
    navItems.classList.toggle('active');
}