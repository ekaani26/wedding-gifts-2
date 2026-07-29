/* ===== Gallery Lightbox ===== */
$(document).ready(function () {

    // Initialize Magnific Popup for gallery images
    $(".gallery").magnificPopup({

        delegate: "a",          // Target anchor links inside gallery
        type: "image",          // Set content type as image
        removalDelay: 500,      // Delay popup removal for animation
        gallery: {
            enabled: true         // Enable gallery navigation
        },

    });

});