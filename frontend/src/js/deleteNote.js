//Note Del Function

async function deleteBtnHandler(e) {
  const apiUrl = `${localhostUrl}deleteNote/` + e;

  const warningModal = document.querySelector(".warning-card");
  warningModal.parentElement.classList.toggle("hidden");

  const warningModalCancel = document.querySelector(".warning-model-cancel");
  const warningModalDelete = document.querySelector(".warning-model-proceed");

  warningModalDelete.addEventListener("click", async () => {
    const globalMessage = document.querySelector(".global-message-box");

    globalMessage.classList.toggle("hidden");
    globalMessage.classList.toggle("global-color-danger");

    const note = document.getElementById(e);
    note.remove();

    fetchUrl(apiUrl, "delete", {});

    setTimeout(() => {
      globalMessage.classList.toggle("global-color-danger");
      globalMessage.classList.toggle("hidden");
      warningModal.parentElement.classList.toggle("hidden");
      location.reload();
    }, 1000);
  });

  warningModalCancel.addEventListener("click", () => {
    location.reload();
  });
}

window.deleteBtnHandler = deleteBtnHandler;
