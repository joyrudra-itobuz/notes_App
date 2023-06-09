function appendAllData() {
  //Funtion to See if There are no New Notes

  const notes = document.querySelectorAll(".note");
  if (notes.length !== 0) {
    document.querySelector(".home-header").classList.toggle("hidden");
  }

  //Function to Fetch All the Data and append them in a div

  async function getRouteData(apiUrl, method, data) {
    const body = JSON.stringify(data);
    const response = await fetch(apiUrl, {
      mode: "cors",
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err;
      });

    return response;
  }

  const allNotesContainer = document.querySelector(".all-notes-container");

  const notesBgColors = ["#7ed183", "#799cd4", "#dfdf42", "#4de8db"];
  let bgColorCount = 0;

  getRouteData("http://localhost:6060/allNotes", "GET")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const note = document.createElement("div");

        note.classList.add("note");
        note.setAttribute(
          "onhover",
          "onmouseover('" + response.data[i]._id + "')"
        );
        note.id = response.data[i]._id;
        note.style.backgroundColor = notesBgColors[bgColorCount];
        bgColorCount++;

        if (bgColorCount === 4) {
          bgColorCount = 0;
        }

        const noteHeading = document.createElement("h2");
        const noteContent = document.createElement("p");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");

        delButton.setAttribute(
          "onclick",
          "deleteBtnHandler('" + response.data[i]._id + "')"
        );

        editButton.setAttribute(
          "onclick",
          "editBtnHandler('" + response.data[i]._id + "')"
        );

        note.dataset.note = response.data[i]._id;

        noteHeading.textContent = response.data[i].notesHeading;
        noteContent.textContent = response.data[i].notesContent;
        delButton.classList.add("fa", "fa-trash", "delete-btn");
        editButton.classList.add("fa-solid", "fa-edit", "edit-btn");

        note.appendChild(noteHeading);
        note.appendChild(noteContent);
        note.appendChild(delButton);
        note.appendChild(editButton);

        allNotesContainer.appendChild(note);
      }
      return response.data;
    })
    .catch((err) => {
      return err;
    });
}

if (
  location.href.includes("index") ||
  location.href === "http://localhost:8000/"
) {
  appendAllData();
}

window.appendAllData = appendAllData;
