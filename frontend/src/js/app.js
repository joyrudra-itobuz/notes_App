import "../scss/app.scss";
import "./appendAllNotes";
import "./sendNewNoteData";

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
