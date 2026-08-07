const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');
const navigationLinks = document.querySelectorAll('.main-nav a');
const quoteForm = document.querySelector('#quote-form');
const formMessage = document.querySelector('#form-message');
const currentYear = document.querySelector('#current-year');

currentYear.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu';
  });
});

quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  formMessage.textContent = 'The form layout works. We will connect it to real email later.';
});
