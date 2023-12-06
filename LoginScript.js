document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    checkCredentials();
});

function checkCredentials() {
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Replace 'your_username' and 'your_password' with your actual credentials
    const correctUsername = 'k';
    const correctPassword = 'k';

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        console.log("check");
        // Redirect to another website
        window.location.href = "https://youtu.be/xvFZjo5PgG0?si=bRAJie7w_kNp198o"; // Replace with your desired URL
    } else {
        alert('Incorrect credentials. Please try again.');
        console.log("nope");
    }
}
