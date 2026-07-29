/*---------- Payment Methods ----------*/
$(document).ready(function () {

  // Handle click on payment option labels
  $(".payment .radio-label").click(function () {

    // Deactivate all payment method bodies
    $(".payment .payment-body").removeClass("active");

    // Activate the selected payment method body
    $(this).next(".payment-body").addClass("active");
  });

});