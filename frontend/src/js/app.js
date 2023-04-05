import "../scss/app.scss";
import "./appendAllNotes";

/* Fething All The Pre-Existing Notes From The DataBase */

//Adding Add button trigger Effect

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
