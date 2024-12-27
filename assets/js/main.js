const swiper = new Swiper('.main-slider', {
    loop: true,
    autoplay: {
      delay: 120000,
      disableOnInteraction: false,
    },
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiper2 = new Swiper('.ourCliencs__slider', {
    loop: true,
    autoplay: {
        delay: 120000,
        disableOnInteraction: false,
    },
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.custom-slider__btn--next',
        prevEl: '.custom-slider__btn--prev',
    },
    slidesPerView: 4,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    spaceBetween: 19,
});

const swiper3 = new Swiper('.ourReviews__slider', {
  loop: true,
  autoplay: {
      delay: 120000,
      disableOnInteraction: false,
  },
  autoHeight: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.custom-slider__btn-review--next',
      prevEl: '.custom-slider__btn-review--prev',
  },
  slidesPerView: 3,
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
    },
      991: {
          slidesPerView: 3,
      },
  },
  spaceBetween: 19,
});


// card spoiler


function toggleCardMobSpoiler() {
  const toggleItemBtns = document.querySelectorAll('.card-mob__head');
  const toggleItems = document.querySelectorAll('.card-mob');

  toggleItemBtns.forEach((item) => {
    item.addEventListener('click', () => {
      const targetBlock = item.closest('.card-mob');

      if (targetBlock.classList.contains('active')) {
        targetBlock.classList.remove('active');
      } else {
        toggleItems.forEach((block) => {
          block.classList.remove('active');
        });

        targetBlock.classList.add('active');
      }
    });
  });
}

toggleCardMobSpoiler();

// header scroll

function initScrollHeader() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 0) {
      // Якщо скролимо вниз (висота скролу більше 0)
      header.classList.add("scroll-mode");
    } else {
      // Якщо повернулись до початку сторінки (висота скролу дорівнює 0)
      header.classList.remove("scroll-mode");
    }
  });
}

// Виклик функції
initScrollHeader();