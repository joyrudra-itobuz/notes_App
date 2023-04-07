//Sending a new note

function newNote() {
  const heading = document.querySelector(".heading");
  const content = document.querySelector(".content");
  const saveBtn = document.querySelector(".save-btn");

  saveBtn.addEventListener("click", async () => {
    const noteData = {
      notesHeading: heading.value,
      notesContent: content.value,
    };

    console.log("Clicked!", noteData);

    const globalMessage = document.querySelector(".global-message-box");
    globalMessage.classList.toggle("hidden");
    globalMessage.classList.toggle("global-color-sucess");

    await fetch("http://127.0.0.1:6060/newNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });

    setTimeout(() => {
      globalMessage.classList.toggle("hidden");
      globalMessage.classList.toggle("global-color-sucess");
      location.href = "index.html";
    }, 1000);
  });
}

if (location.href.includes("newNote")) {
  newNote();
}
