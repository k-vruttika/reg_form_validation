document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic validation
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!email || !username || !password) {
        alert('All fields are required.');
        return;
    }

    // Email format validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password strength validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Show confirmation message and hide form
    document.querySelector('.form-container').classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');
});

document.getElementById('goBackButton').addEventListener('click', function() {
    // Show the registration form and hide the confirmation message
    document.querySelector('.form-container').classList.remove('hidden');
    document.getElementById('confirmationMessage').classList.add('hidden');
});

document.getElementById('goBackButton').addEventListener('click', function() {
    // Show the registration form and hide the confirmation message
    document.querySelector('.form-container').classList.remove('hidden');
    document.getElementById('confirmationMessage').classList.add('hidden');

    // Clear all input fields
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('terms').checked = false;
});
