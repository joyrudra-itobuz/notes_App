import "../scss/app.scss";
import "./appendAllNotes";
import "./sendNewNoteData";
import "./deleteNote";
import "./editNoteData";

/* Adding Add button trigger Effect */

function homePage() {
  const homeNewBtn = document.querySelector(".home-new-btn");
  const newBtnDropdown = document.querySelector(".add-icon-dropdown");

  homeNewBtn.addEventListener("click", () => {
    if (
      newBtnDropdown.classList.contains("add-icon-dropdown-closing-amimation")
    ) {
      newBtnDropdown.classList.toggle("add-icon-dropdown-closing-amimation");
      newBtnDropdown.classList.toggle("hidden");
      newBtnDropdown.classList.toggle("add-icon-dropdown-openning-amimation");
    } else {
      newBtnDropdown.classList.toggle("add-icon-dropdown-openning-amimation");
      newBtnDropdown.classList.toggle("add-icon-dropdown-closing-amimation");
      setTimeout(() => {
        newBtnDropdown.classList.toggle("hidden");
      }, 500);
    }
  });

  //Modal Trigger

  const modelBackButton = document.querySelector(".modal-go-home");

  modelBackButton.addEventListener("click", () => {
    const modal = document.querySelector(".edit-content-modal");
    modal.classList.toggle("hidden");
  });
}

if (
  location.href.includes("index") ||
  location.href === "http://localhost:8000/"
) {
  homePage();
}

//Functions not working when updated in main JS

//Fetch Function

const localhostUrl = "http://localhost:6060/";

async function fetchUrl(apiUrl, method, data) {
  await fetch(apiUrl, {
    mode: "cors",
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    });
}

const noteHoverAnimation = (id) => {
  console.log("Hover");
  const note = document.getElementById(id);
  note.classList.add("note-focus");
};

window.localhostUrl = localhostUrl;
window.fetchUrl = fetchUrl;
window.noteHoverAnimation = noteHoverAnimation;
