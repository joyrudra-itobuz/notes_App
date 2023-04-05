function newNote() {
  console.log("Works sending data");
  const heading = document.querySelector(".heading");
  const content = document.querySelector(".content");
  const saveBtn = document.querySelector(".save-btn");

  saveBtn.addEventListener("click", () => {
    const noteData = {
      notesHeading: heading.value,
      notesContent: content.value,
    };
    console.log("Clicked!", noteData);

    fetch("http://127.0.0.1:6060/newNote", {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    });
  });
}

if (location.href.includes("newNote")) {
  newNote();
}
