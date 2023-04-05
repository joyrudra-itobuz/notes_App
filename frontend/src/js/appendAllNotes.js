//Funtion to See if There are no New Notes

const notes = document.querySelectorAll(".note");
if (notes.length === 0) {
  document.querySelector("header").classList.toggle("hidden");
}

//Function to Fetch All the Data

const getRouteData = (apiUrl) => {
  const response = fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });

  return response;
};

const allNotesContainer = document.querySelector(".all-notes-container");

const notesBgColors = ["#7ed183", "#799cd4", "#dfdf42", "#4de8db"];
let bgColorCount = 0;

getRouteData("http://localhost:6060/allNotes")
  .then((allNotes) => {
    console.log(allNotes);
    for (let i = 0; i < allNotes.length; i++) {
      const note = document.createElement("div");
      note.classList.add("note");
      note.id = allNotes[i]._id;
      note.style.backgroundColor = notesBgColors[bgColorCount];
      bgColorCount++;
      if (bgColorCount === 4) {
        bgColorCount = 0;
      }
      const noteHeading = document.createElement("h2");
      const noteContent = document.createElement("p");

      noteHeading.textContent = allNotes[i].notesHeading;
      noteContent.textContent = allNotes[i].notesContent;

      note.appendChild(noteHeading);
      note.appendChild(noteContent);
      allNotesContainer.appendChild(note);
    }
    return allNotes;
  })
  .catch((err) => {
    console.log(err);
  });
