/*---------- Product Image Gallery ----------*/

let productImage = document.querySelector(".product-des .image"); // Gallery container
let productMain = document.querySelector(".main img");           // Main product image
let productAll = document.querySelectorAll(".change-btns img");   // Thumbnail images

// Loop through all thumbnails
productAll.forEach(product => {

    product.addEventListener("click", () => {

        // Update active thumbnail
        productImage.querySelector(".active").classList.remove("active");
        product.classList.add("active");

        // Update main product image
        let src = product.getAttribute("src");
        productMain.src = src;

    });

});
