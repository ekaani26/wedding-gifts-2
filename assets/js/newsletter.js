/* ===== Newsletter Form ===== */
$(document).ready(function () {

  // Reusable function to handle newsletter form submission
  function setupNewsletterForm(formId, msgId, submitId) {

    // Bind submit event to the form
    $(formId).on('submit', function (e) {

      var form = $(this);                  // Current form reference
      var msgElement = form.find(msgId);   // Message display element
      var submitBtn = form.find(submitId); // Submit button

      // Reset message area and show loading state
      msgElement.html('').show();
      submitBtn.html('Processing...').attr('disabled', true);

      // Send form data via AJAX
      $.ajax({
        url: '../../assets/php/newsletter.php', // Newsletter backend handler
        type: 'post',                            // HTTP method
        data: form.serialize(),                  // Serialize form data

        success: function (result) {
          msgElement.html(result).fadeIn(); // Show success message
          form[0].reset();                  // Reset form fields
          submitBtn.html('Subscribe').attr('disabled', false); // Reset button

          // Hide message after delay
          setTimeout(function () {
            msgElement.css('visibility', 'hidden');
          }, 4000);
        },

        error: function () {
          msgElement
            .html('<span style="color:red;">Error occurred. Please try again later.</span>')
            .fadeIn(); // Show error message

          submitBtn.html('Subscribe').attr('disabled', false); // Reset button
        }

      });

      e.preventDefault(); // Prevent default form submission
    });
  }

  // Initialize newsletter forms
  setupNewsletterForm('#newsletter-form', '#msg', '#submit');

});