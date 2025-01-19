// Set the date you're counting down to
const countdownDate = new Date("Jan 31, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    if (timeLeft > 0) {
        daysElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining.`;
    } else {
        daysElement.innerHTML = 'The event has started!';
        clearInterval(interval); // Stop the countdown when the event has started
    }
}

// Update the countdown every 1 second
const interval = setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();
