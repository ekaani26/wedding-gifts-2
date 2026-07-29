/*---------- Order Form ----------*/
jQuery(document).ready(function ($) {

  // Handle order form submission
  $('#order-form').on('submit', function (e) {

    e.preventDefault(); // Stop default form submission

    var form = $(this);                      // Current form reference
    var msgElement = form.find('#order-msg');   // Message display element
    var submitBtn = form.find('#order-submit'); // Submit button

    // Reset message area and show loading state
    msgElement.html('').show();
    submitBtn.html('Processing...').attr('disabled', true);

    // Send form data via AJAX
    $.ajax({
      url: '../../assets/php/order.php', // Server-side order handler
      type: 'post',                     // HTTP method
      data: form.serialize(),           // Serialize form data

      success: function (result) {
        msgElement.html(result).fadeIn();          // Show success message
        submitBtn.html('Place Custom Order').attr('disabled', false); // Reset button
        form[0].reset();                            // Clear form fields

        // Hide message after delay
        setTimeout(function () {
          msgElement.fadeOut('slow'); // Fade out message
        }, 4000);
      },

      error: function () {
        msgElement.html('<span style="color:red;">Error occurred. Please try again later.</span>').fadeIn(); // Show error
        submitBtn.html('Place Custom Order').attr('disabled', false); // Reset button
      }

    });

  });

});