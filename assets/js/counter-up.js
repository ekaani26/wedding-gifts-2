/*---------- Counter-Up ----------*/
$(document).ready(function () {

  // Loop through each counter element
  $('.count').each(function () {

    var $this = $(this),                 // Current counter element
        countTo = $this.attr('data-count'); // Target number from data attribute

    // Animate number counting effect
    $({ countNum: $this.text() }).animate({
      countNum: countTo
    }, {
      duration: 5000, // Animation duration (5 seconds)

      step: function () {
        $this.text(Math.floor(this.countNum)); // Update number during animation
      },

      complete: function () {
        $this.text(this.countNum + '+'); // Final value with plus sign
      }

    });

  });

});