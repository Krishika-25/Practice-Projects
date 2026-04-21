let newnotebtn = document.querySelector(".add-note-btn");
let notes = document.querySelector(".notes-container");

function saveNotes() {
    let inputs = document.querySelectorAll(".note-text");
    let data = [];

    inputs.forEach(function (input) {
        if (input.value.trim() !== "") {
            data.push(input.value);
        }
    });

    localStorage.setItem("notes", JSON.stringify(data));
}

function loadNotes() {
    let data = JSON.parse(localStorage.getItem("notes"));

    if (data) {
        data.forEach(function (text) {
            let wrapper = document.createElement("div");
            wrapper.classList.add("note-card");

            let textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.classList.add("note-text");

            let delBtn = document.createElement("button");
            delBtn.textContent = "❌";
            delBtn.classList.add("delete-btn");

            delBtn.addEventListener("click", function () {
                wrapper.remove();
                saveNotes();
            });

            textarea.addEventListener("input", saveNotes);

            wrapper.appendChild(textarea);
            wrapper.appendChild(delBtn);

            notes.appendChild(wrapper);
        });
    }
}

newnotebtn.addEventListener("click", function () {
    let wrapper = document.createElement("div");
    wrapper.classList.add("note-card");

    let textarea = document.createElement("textarea");
    textarea.placeholder = "Write your note...";
    textarea.classList.add("note-text");

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.classList.add("delete-btn");

    delBtn.addEventListener("click", function () {
        wrapper.remove();
        saveNotes();
    });

    textarea.addEventListener("input", saveNotes);

    wrapper.appendChild(textarea);
    wrapper.appendChild(delBtn);

    notes.appendChild(wrapper);
    textarea.focus();
});

loadNotes();