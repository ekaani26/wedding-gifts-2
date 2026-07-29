/*---------- Faqs Accordion ----------*/
$(document).ready(function () {

  // Handle accordion click events
  $(".accordion-container .accordion").click(function () {

    // Close accordion if already active
    if ($(this).hasClass("active")) {
      $(this).removeClass("active"); // Remove active state
      $(this).find("i").removeClass("fa-minus").addClass("fa-plus"); // Switch icon to plus
    }

    // Open selected accordion and close others
    else {
      $(".accordion-container .accordion").removeClass("active"); // Close all accordions
      $(".accordion-container .accordion .accordion-heading i")
        .removeClass("fa-minus")
        .addClass("fa-plus"); // Reset all icons

      $(this).addClass("active"); // Activate clicked accordion
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus"); // Switch icon to minus
    }

  });

});
