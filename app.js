const navItems = document.getElementById('nav-items');
const btn = document.getElementById('burger');

function showNavItems () {
    btn.classList.toggle('active');
    navItems.classList.toggle('active');
}

function submitForm() {
    alert('Thank You For Your Response, I will Get Back To You As Soon As Possible')
}