// Ініціалізація Hero Slider
const heroSwiper = new Swiper('.hero', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

// Ініціалізація Featured Collection
const featuredSwiper = new Swiper('.featured-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.featured-next',
    prevEl: '.featured-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ========== HELP FORM ==========
const helpForm = document.getElementById('helpForm');
if (helpForm) {
  helpForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Дякуємо! Ми скоро з вами зв'яжемося.");
    helpForm.reset();
  });
}

// ========== POPUP ==========
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const popupForm = document.getElementById('popupForm');

window.addEventListener('load', () => {
  setTimeout(() => {
    popup.style.display = 'block';
    popup.setAttribute('aria-hidden', 'false');
  }, 2000);
});

if (closePopup) {
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden', 'true');
  });
}

if (popupForm) {
  popupForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('popupEmail').value.trim();
    if (email) {
      alert(`Дякуємо! Промокод буде відправлено на ${email}`);
      popup.style.display = 'none';
      popupForm.reset();
    }
  });
}
