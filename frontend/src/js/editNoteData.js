//Note Edit Function

async function editBtnHandler(e) {
  const editModal = document.querySelector(".edit-content-modal");

  const warningModal = document.querySelector(".warning-card");
  warningModal.parentElement.classList.toggle("hidden");

  const warningModalCancel = document.querySelector(".warning-model-cancel");
  const warningModalEdit = document.querySelector(".warning-model-proceed");
  warningModalEdit.textContent = "Edit";

  warningModalCancel.addEventListener("click", () => {
    warningModal.parentElement.classList.toggle("hidden");
    location.reload();
  });

  warningModalEdit.addEventListener("click", () => {
    const resetBtn = document.querySelector(".edit-reset-button");

    resetBtn.addEventListener("click", () => {
      editHeader.value = "";
      editContent.value = "";
    });

    warningModal.parentElement.classList.toggle("hidden");

    const parentElement = document.getElementById(`${e}`);
    let heading = parentElement.firstChild;
    let content = heading.nextSibling;

    heading = heading.textContent;
    content = content.textContent;

    editModal.classList.toggle("hidden");

    const editHeader = document.querySelector(".edit-heading");
    const editContent = document.querySelector(".edit-content");

    editHeader.value = heading;
    editContent.value = content;

    const editSaveBtn = document.querySelector(".edit-save-btn");

    editSaveBtn.addEventListener("click", async () => {
      const noteData = {
        notesHeading: editHeader.value,
        notesContent: editContent.value,
      };

      const apiUrl = `${localhostUrl}updateNote/` + e;

      fetchUrl(apiUrl, "PATCH", noteData);

      const globalMessage = document.querySelector(".global-message-box");

      globalMessage.textContent = "Edited!";
      globalMessage.classList.toggle("hidden");
      globalMessage.classList.toggle("global-color-sucess");

      setTimeout(() => {
        globalMessage.classList.toggle("global-color-sucess");
        globalMessage.classList.toggle("hidden");
        globalMessage.textContent = "Deleted!";
        editModal.classList.toggle("hidden");
        location.reload();
      }, 2000);
    });
  });
}

window.editBtnHandler = editBtnHandler;
