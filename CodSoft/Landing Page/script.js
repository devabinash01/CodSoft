document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    // Toggle navigation menu for mobile
    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Handle newsletter subscription
    const subscribeButton = document.getElementById('subscribe');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');

    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;
        if (email) {
            message.textContent = 'Thank you for subscribing!';
            message.style.color = 'green';
            emailInput.value = ''; // Clear input
        } else {
            message.textContent = 'Please enter a valid email.';
            message.style.color = 'red';
        }
    });
});