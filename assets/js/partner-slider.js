/* ===== Partner Slider ===== */
var swiper = new Swiper(".partner-slider", {

  spaceBetween: 10, // Space between slides (px)
  loop: true,       // Enable infinite looping
  autoplay: {
    delay: 5000,              // Time delay between slides
    disableOnInteraction: false, // Keep autoplay after user interaction
  },

  breakpoints: {
    0: {
      slidesPerView: 2, // 2 slides on small screens
    },
    450: {
      slidesPerView: 3, // 3 slides on medium screens
    },
    768: {
      slidesPerView: 4, // 4 slides on tablets
    },
    1024: {
      slidesPerView: 5, // 5 slides on large screens
    },
  },

});