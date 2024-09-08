import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";

const myswiper0 = new Swiper('.swiper-6', {
  modules: [Navigation, Pagination, Autoplay,],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const swiper = new Swiper('.swiper-1', {
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    480: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myswiper = new Swiper('.swiper-2', {
  modules: [Autoplay],
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    378: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
});


const myswiper1 = new Swiper('.swiper-3', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  // slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const myswiper2 = new Swiper('.swiper-4', {
  modules: [Autoplay],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 64,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myswiper3 = new Swiper('.swiper-5', {
  modules: [Autoplay],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myswiper4 = new Swiper('.swiper-6', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 6,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const myswiper5 = new Swiper('.swiper-7', {
  modules: [Navigation, Pagination, Autoplay, Grid],
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1280: {
      slidesPerView: 6,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
