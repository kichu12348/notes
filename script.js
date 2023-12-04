document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.getElementById("notes-container");
    const addNoteBtn = document.getElementById("add-note-btn");

    addNoteBtn.addEventListener("click", function () {
        const noteText = prompt("Enter your note:");
        if (noteText) {
            createNoteElement(noteText);
        }
    });

    function createNoteElement(noteText) {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.textContent = noteText;
        notesContainer.appendChild(noteElement);
    }
});
