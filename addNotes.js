// Initialize Firebase (replace with your own Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyD-0MCaaCYjfnrYrdSajtXIzJsL5nLddz8",
    authDomain: "notes-6588f.firebaseapp.com",
    databaseURL: "https://notes-6588f-default-rtdb.firebaseio.com",
    projectId: "notes-6588f",
    storageBucket: "notes-6588f.appspot.com",
    messagingSenderId: "214921220799",
    appId: "1:214921220799:web:de547cb77176de4f306c0a"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var NotesDB = firebase.database().ref('addNotesForm');
  
  document.getElementById('addNotesForm').addEventListener("submit", submitForm);
  
  function submitForm() {
    var name = getElementVAL('Title');
    var link = getElementVAL('LinkFile');
    saveFiles(name, link);
    document.getElementById('addNotesForm').reset();
  }
  
  function getElementVAL(id) {
    return document.getElementById(id).value;
  }
  
  function saveFiles(name, link) {
    var newNote = NotesDB.push();
    newNote.set({
      name: name,
      link: link,
    });
  }
  
  function retrieveAndDisplayData() {
    NotesDB.on('value', function (snapshot) {
      var notes = snapshot.val();
  
      // Clear the existing notes container
      var notesContainer = document.getElementById('notesOnLeftContainer');
      notesContainer.innerHTML = '';
  
      if (notes) {
        Object.keys(notes).forEach(function (noteKey) {
          var name = notes[noteKey].name;
  
          // Create a new note div for each retrieved note
          var newNoteDiv = document.createElement('div');
          newNoteDiv.className = 'noteOnLeft';
  
          // Display the note title
          var titleElement = document.createElement('h3');
          titleElement.className = 'bappleOnLeft';
          titleElement.textContent = name;
          newNoteDiv.appendChild(titleElement);
  
          // Create a delete button
          var deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'deleteButton';
          deleteButton.addEventListener('click', function () {
            // Call the function to delete the note
            deleteNoteByKey(noteKey);
          });
  
          // Append the delete button to the note div
          newNoteDiv.appendChild(deleteButton);
  
          // Append the new note div to the notes container
          notesContainer.appendChild(newNoteDiv);
        });
      } else {
        console.log("No notes found");
      }
    });
  }
  
  // Function to delete a note by key
  function deleteNoteByKey(noteKey) {
    var noteRef = NotesDB.child(noteKey);
    noteRef.remove()
      .then(function () {
        console.log("Note successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error deleting note: ", error);
      });
  }
  
  // Call the function to retrieve and display data when the page loads
  retrieveAndDisplayData();
  
  
  

  
  