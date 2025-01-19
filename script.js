// Set the target date (September 24, 2024, 1:52 PM)
const targetDate = new Date('September 24, 2024 13:52:00').getTime();

function updateElapsedTime() {
    // Get the current time
    const now = new Date().getTime();
    
    // Calculate the time difference (how much time has passed since the target date)
    const timePassed = now - targetDate;

    // Calculate the days, hours, minutes, and seconds that have passed
    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24)); // Days
    const hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
    const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
    const seconds = Math.floor((timePassed % (1000 * 60)) / 1000); // Seconds

    // Update the #days element with the calculated time passed
    const daysElement = document.getElementById('days');
    daysElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s have passed since the event.`;
}

// Update the time every second
const interval = setInterval(updateElapsedTime, 1000);

// Initialize the elapsed time display
updateElapsedTime();
