document.addEventListener("DOMContentLoaded", function () {
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    themeIcon.addEventListener("click", function () {
        // Toggle light/dark mode
        body.classList.toggle("light-mode");

        // Toggle the icon between light and dark
        const currentSrc = themeIcon.src;
        const lightIconPath = "light.png";
        const darkIconPath = "dark.png"; // Replace with the path to your dark theme icon

        themeIcon.src = currentSrc.includes(lightIconPath) ? darkIconPath : lightIconPath;
    });
});


// Retrieve notes from localStorage
var savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

// Display each saved note
savedNotes.forEach(function(note) {
    var newNoteDiv = document.createElement('div');
    newNoteDiv.className = 'note';
    newNoteDiv.innerHTML = '<h2 class="bapple">' + note.title + '</h2><a href="' + note.link + '" class="apple"><button class="stylesButton">View PDF</button></a>';
    document.getElementById('notes-container').appendChild(newNoteDiv);
});


