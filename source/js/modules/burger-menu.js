// меню бургер

const navMenu = document.querySelector('.nav__icon');
const navConteinerCap = document.querySelector('.nav__conteiner-cap');
const navLogoSvg = document.querySelector('.nav__logo-svg');
const navBody = document.querySelector('.nav__body');
const pageHeaderTitle = document.querySelector('.page-header__title');

navBody.classList.remove('nav__body--nojs');
navMenu.classList.remove('nav__icon--nojs');
pageHeaderTitle.classList.remove('page-header__title--nojs');


if (navMenu) {
  navMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    navMenu.classList.toggle('_active');
    navBody.classList.toggle('_active');
    navConteinerCap.classList.toggle('_active');
    navLogoSvg.classList.toggle('_active');
  });
}

// прокрутка при клике

const menuLinks = document.querySelectorAll('.nav__item-link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      if (navMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        navMenu.classList.remove('_active');
        navBody.classList.remove('_active');
        navConteinerCap.classList.remove('_active');
        navLogoSvg.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
