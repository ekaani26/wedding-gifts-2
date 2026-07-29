/* ===== Section Slider ===== */
var swiper = new Swiper(".section-slider", {

  spaceBetween: 10,       // Space between slides in px
  loop: true,             // Enable infinite looping

  autoplay: {
    delay: 5000,          // Time between slide transitions in ms
    disableOnInteraction: false, // Continue autoplay after user interaction
  },

  breakpoints: {
    450: {
      slidesPerView: 2,   // 2 slides visible on small screens
    },
    991: {
      slidesPerView: 3,   // 3 slides visible on medium screens
    },
  },

});