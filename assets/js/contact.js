/*--------------- Contact Form ---------------*/ 
jQuery(document).ready(function ($) {

  // Handle contact form submission
  $('#contact-form').on('submit', function (e) {

    e.preventDefault(); // Stop default form submission

    var form = $(this);                      // Current form reference
    var msgElement = form.find('#contact-msg'); // Message display element
    var submitBtn = form.find('#contact-submit'); // Submit button

    // Reset message area and show loading state
    msgElement.html('').show();
    submitBtn.html('Processing...').attr('disabled', true);

    // Send form data via AJAX
    $.ajax({
      url: '../../assets/php/submit.php', // Server-side form handler
      type: 'post',                       // HTTP request method
      data: form.serialize(),             // Serialize form data

      success: function (result) {
        msgElement.html(result).fadeIn();           // Show success message
        submitBtn.html('Send Message').attr('disabled', false); // Reset button
        form[0].reset();                             // Clear form fields

        // Hide message after delay
        setTimeout(function () {
          msgElement.fadeOut('slow'); // Fade out message
        }, 4000);
      },

      error: function () {
        msgElement.html('<span style="color:red;">Error occurred. Please try again later.</span>').fadeIn(); // Show error
        submitBtn.html('Send Message').attr('disabled', false); // Reset button
      }
    });

  });

});
