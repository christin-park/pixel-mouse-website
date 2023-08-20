const hambuger = document.getElementsByClassName('hambuger')[0];
const navLinks = document.getElementsByClassName('navigation-links')[0];

hambuger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})