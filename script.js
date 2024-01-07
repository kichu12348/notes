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

function retrieveAndDisplayData() {
  NotesDB.on('value', function (snapshot) {
    var notes = snapshot.val();
    var notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = ''; // Clear existing notes

    if (notes) {
      Object.keys(notes).forEach(function (noteKey) {
        var name = notes[noteKey].name;
        var link = notes[noteKey].link;

        // Create a new note div for each retrieved note
        var newNoteDiv = document.createElement('div');
        newNoteDiv.className = 'note';
        newNoteDiv.innerHTML = '<h2 class="bapple">' + name + '</h2><a href="' + link + '" class="apple"><button class="stylesButton">View PDF</button></a>';

        // Append the new note div to the notes container
        notesContainer.appendChild(newNoteDiv);
      });
    } else {
      console.log("No notes found");
    }
  }, function (error) {
    console.error("Error retrieving data: ", error);
  });
}

retrieveAndDisplayData();

  


//theme
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





