/* ===== Deal Countdown ===== */

// Set the target date and time for the countdown
let futureCountdown = new Date("Dec 31, 2026 00:00:00").getTime();

// Countdown calculation function
function countDown() {

    let now = new Date().getTime();              // Get current time
    let gap = futureCountdown - now;             // Time difference

    // Time unit values in milliseconds
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;

    // Calculate remaining time units
    let d = Math.floor(gap / day);               // Remaining days
    let h = Math.floor((gap % day) / hours);     // Remaining hours
    let m = Math.floor((gap % hours) / minutes); // Remaining minutes
    let s = Math.floor((gap % minutes) / seconds); // Remaining seconds

    // Update countdown values in the DOM
    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

// Update countdown every second
setInterval(countDown, 1000);