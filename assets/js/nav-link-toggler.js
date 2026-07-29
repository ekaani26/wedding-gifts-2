/*---------- Mobile-Navbar Nav Toggler ----------*/
$(document).ready(function () {

  // Handle main navigation link click
  $(".main-nav-link").click(function () {

    // Close submenu if already active
    if ($(this).hasClass("active")) {
      $(this).removeClass("active"); // Remove active state
      $(this).next(".sub-nav-link").removeClass("active").slideUp(); // Hide submenu
      $(this).find("i").removeClass("fa-minus").addClass("fa-plus"); // Switch icon to plus
    }

    // Open selected submenu and close others
    else {
      $(".nav-link .main-nav-link").removeClass("active"); // Deactivate all main links
      $(".nav-link .sub-nav-link").removeClass("active").slideUp(); // Hide all submenus
      $(".nav-link .main-nav-link i")
        .removeClass("fa-minus")
        .addClass("fa-plus"); // Reset all icons

      $(this).addClass("active"); // Activate clicked link
      $(this).next(".sub-nav-link").addClass("active").slideDown(); // Show submenu
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus"); // Switch icon to minus
    }

  });

});
