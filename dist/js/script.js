const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    hamburger.classList.add('d-none');
});
close.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('d-none');
});