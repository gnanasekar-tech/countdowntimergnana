// Set the date and time of the upcoming event
const eventDate = new Date("2023-06-08T00:00:00Z");

// Function to update the countdown timer
function updateCountdown() {
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Display the countdown timer
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Check if the event has already occurred
    if (difference <= 0) {
        clearInterval(countdownInterval);
        timerElement.innerHTML = "Event has already occurred!";
    }
}

// Update the countdown timer every second
const countdownInterval = setInterval(updateCountdown, 1000);
