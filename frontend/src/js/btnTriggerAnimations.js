//Adding Add button trigger Effect

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
}

if (location.href.includes("index")) {
  homePage();
}
