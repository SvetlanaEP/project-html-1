const bodyTeg = document.querySelector('body')

let navMain = document.querySelector('.main-nav');

let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let orderButtonList = document.querySelectorAll('.button--order');
let modalCallback = document.querySelector('.form-modal');

console.log(orderButtonList)

orderButtonList.forEach((buttonSend) => {
 buttonSend.addEventListener('click', () => {
    bodyTeg.style.overflow = 'hidden';
    modalCallback.style.display = 'block';
    document.querySelector('.overflow').classList.add('overflow--open');
  })
})

let closeButton = modalCallback.querySelector('.form-modal__closed')

closeButton.addEventListener('click', () => {
  bodyTeg.style.overflow = 'auto';
  modalCallback.style.display = 'none';
  document.querySelector('.overflow').classList.remove('overflow--open');
})


