//Funtion to See if There are no New Notes

function homePage() {
  const notes = document.querySelectorAll(".note");
  if (notes.length === 0) {
    document.querySelector(".home-header").classList.toggle("hidden");
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
      console.log(allNotes[0].data);
      for (let i = 0; i < allNotes[0].data.length; i++) {
        const note = document.createElement("div");

        note.classList.add("note");
        note.id = allNotes[0].data[i]._id;
        note.style.backgroundColor = notesBgColors[bgColorCount];
        bgColorCount++;

        if (bgColorCount === 4) {
          bgColorCount = 0;
        }

        const noteHeading = document.createElement("h2");
        const noteContent = document.createElement("p");
        const delButton = document.createElement("button");
        console.log(allNotes[0].data[i]._id);
        delButton.setAttribute(
          "onclick",
          "deleteBtnHandler('" + allNotes[0].data[i]._id + "')"
        );

        note.dataset.note = allNotes[0].data[i]._id;

        noteHeading.textContent = allNotes[0].data[i].notesHeading;
        noteContent.textContent = allNotes[0].data[i].notesContent;
        delButton.classList.add("fa", "fa-trash");

        note.appendChild(noteHeading);
        note.appendChild(noteContent);
        note.appendChild(delButton);

        allNotesContainer.appendChild(note);
      }
      return allNotes[0].data;
    })
    .catch((err) => {
      console.log(err);
    });

  // const delButton = document.querySelectorAll(".note button");

  // console.log(delButton);

  // for (let i = 0; i < delButton.length; i++) {
  //   delButton[i].addEventListener("click", () => {
  //     const getId = delButton[i].id;
  //     const apiUrl = "localhost:6060/deleteNote/" + getId;
  //     fetch(apiUrl)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // }
  // document.querySelector(".fa-trash").addEventListener("click", () => {
  //   const id = this.dataset.note;
  //   console.log(id);
  // });
}

if (location.href.includes("index")) {
  homePage();
}
