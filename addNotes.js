function submitNote() {
    // Get user input
    var noteTitle = document.getElementById('Title').value;
    var noteLink = document.getElementById('LinkFile').value;

    // Create a new note object
    var newNote = { title: noteTitle, link: noteLink };

    // Retrieve existing notes from localStorage
    var existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Add the new note to the existing notes
    existingNotes.push(newNote);

    // Save the updated notes back to localStorage
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    // Clear input fields
    document.getElementById('Title').value = '';
    document.getElementById('LinkFile').value = '';

    
}


// Function to display notes on the left
function displayNotesOnLeft() {
    // Retrieve notes from localStorage
    var savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Get the container for displaying notes on the left
    var notesOnLeftContainer = document.getElementById('notesOnLeftContainer');

    // Clear existing content
    notesOnLeftContainer.innerHTML = '';

    // Display each saved note on the left side
    savedNotes.forEach(function (note, index) {
        var noteDiv = document.createElement('div');
        noteDiv.className = 'noteOnLeft';

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function () {
            deleteNoteAndRefresh(index);
        });

        noteDiv.innerHTML = '<h2 class="bappleOnLeft">' + note.title + '</h2>';
        noteDiv.appendChild(deleteButton);

        notesOnLeftContainer.appendChild(noteDiv);
    });
}

// Function to delete a note and refresh the display
function deleteNoteAndRefresh(index) {
    // Retrieve existing notes from localStorage
    var existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Remove the note at the specified index
    existingNotes.splice(index, 1);

    // Save the updated notes back to localStorage
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    // Refresh the display of notes on the left side
    displayNotesOnLeft();
}

// Initial display of notes on the left side
document.addEventListener('DOMContentLoaded', function () {
    displayNotesOnLeft();
    document.getElementById('submitBtn').addEventListener('click', function () {
        displayNotesOnLeft(); // Refresh the display when a new note is submitted
    });
});
