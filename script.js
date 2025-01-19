// Set the target date (September 24, 2024, 1:52 PM)
const targetDate = new Date('September 24, 2024 13:52:00').getTime();

function updateCountdown() {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the time difference (how much time has passed since the target date)
    const timePassed = now - targetDate;

    // If the time has passed, show the countdown
    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24)); // Days
    const hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
    const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
    const seconds = Math.floor((timePassed % (1000 * 60)) / 1000); // Seconds

    // Update the #days element with the calculated time passed
    const daysElement = document.getElementById('days');
    daysElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s have passed since the event.`;
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();
