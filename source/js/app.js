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

function openModal(modal) {
  bodyTeg.style.overflow = 'hidden';
  modal.style.display = 'block';
  document.querySelector('.overflow').classList.add('overflow--open');
}

function closeModal(modal) {
  bodyTeg.style.overflow = 'auto';
  modal.style.display = 'none';
  document.querySelector('.overflow').classList.remove('overflow--open');
}

let orderButtonList = document.querySelectorAll('.button--order');
let modalCallback = document.querySelector('.modal--form');

orderButtonList.forEach((buttonSend) => {
 buttonSend.addEventListener('click', () => {
   openModal(modalCallback)
  })
})
/*
let privacyButtonList = document.querySelectorAll('.privacy-link');
let modalPrivacy = document.querySelector('.modal--privacy');

console.log(privacyButtonList)

privacyButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    bodyTeg.style.overflow = 'hidden';
    modalPrivacy.style.display = 'block';
    document.querySelector('.overflow').classList.add('overflow--open');
  })
})*/

let closeButton = modalCallback.querySelector('.modal__closed')

closeButton.addEventListener('click', () => {
  closeModal(modalCallback)
})

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".site-menu__item");
  const sections = document.querySelectorAll(".section");
  function updateCurrentMenuItem() {
    let currentSectionIndex = -1;

    // Проверяем секции и ищем ту, которая занимает более 50% высоты экрана
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      if (visibleHeight / sectionHeight > 0.5) {
        currentSectionIndex = index;
      }
    });

    // Обновляем класс на пунктах меню
    menuItems.forEach((item, index) => {
      if (index === currentSectionIndex) {
        item.classList.add("site-menu__item--current");
      } else {
        item.classList.remove("site-menu__item--current");
      }
    });
  }

  // Отслеживаем прокрутку страницы
  window.addEventListener("scroll", updateCurrentMenuItem);

  // Выполняем обновление при загрузке страницы
  updateCurrentMenuItem();
});


document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const sliderImages = slider.querySelector(".slider__images");
    const images = slider.querySelectorAll(".slider__image");
    const prevButton = slider.querySelector(".slider__button--prev");
    const nextButton = slider.querySelector(".slider__button--next");

    let currentIndex = 0;

    const updateSlider = () => {
      sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });
  });
});




