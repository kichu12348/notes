document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    checkCredentials();
});

function checkCredentials() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Replace 'your_username' and 'your_password' with your actual credentials
    const correctUsername = 'notes1234';
    const correctPassword = '12345678';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        
        // Redirect to another website
        window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    } else {
        alert('Incorrect credentials. Please try again.');
        
    }
}

