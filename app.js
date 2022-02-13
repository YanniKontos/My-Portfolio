const navItems = document.getElementById('nav-items');
const btn = document.getElementById('burger');

function showNavItems () {
    btn.classList.toggle('active');
    navItems.classList.toggle('active');
}

function submitForm() {
    const emailInput = document.querySelector('.email-form').value;
    const passwordInput = document.querySelector('.message-form').value;

    if (emailInput == '' && passwordInput == '') {
        alert('Please Fill Out The Form With Specified Data.');
    }

    else {
        alert('Thank You For Filling Out The Form, I Will Return To You In Due Time.');
    }

}