const navItems = document.getElementById('nav-items');
const btn = document.getElementById('burger');

function showNavItems () {
    btn.classList.toggle('active');
    navItems.classList.toggle('active');
}