/* ===== Price Range Filter ===== */
const rangeInput = document.querySelectorAll(".range-input input"), // All range slider inputs
      priceInput = document.querySelectorAll(".price-input input"), // All numeric price inputs
      range = document.querySelector(".slider .progress"); // Slider progress bar
let priceGap = 100; // Minimum gap between min and max prices

// Event listeners for numeric price inputs
priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = parseInt(priceInput[0].value), // Current min price
        maxPrice = parseInt(priceInput[1].value); // Current max price

    // Update range slider only if gap is sufficient and max is within bounds
    if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice; // Sync slider min
        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%"; // Update progress left
      } else {
        rangeInput[1].value = maxPrice; // Sync slider max
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%"; // Update progress right
      }
    }
  });
});

// Event listeners for range slider inputs
rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value), // Slider min value
        maxVal = parseInt(rangeInput[1].value); // Slider max value

    // Ensure minimum gap between min and max
    if ((maxVal - minVal) < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap; // Adjust slider min
      } else {
        rangeInput[1].value = minVal + priceGap; // Adjust slider max
      }
    } else {
      // Sync numeric inputs and slider progress
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / rangeInput[0].max) * 100) + "%"; // Update progress left
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%"; // Update progress right
    }
  });
});