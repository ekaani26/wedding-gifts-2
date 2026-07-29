/*--------------- Home Slider ---------------*/ 
var swiper = new Swiper(".home-slider", {

  loop: true, // Enable infinite looping
  autoplay: {
    delay: 5000,               // Time delay between slides
    disableOnInteraction: false, // Keep autoplay after user interaction
  },

  pagination: {
    el: ".swiper-pagination1", // Pagination container
    clickable: true,           // Enable pagination clicks
  },

  navigation: {
    nextEl: ".swiper-button-next", // Next slide button
    prevEl: ".swiper-button-prev", // Previous slide button
  },

});