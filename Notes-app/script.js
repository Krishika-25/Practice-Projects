let newnotebtn = document.querySelector(".add-note-btn");
let notes = document.querySelector(".notes-container");

newnotebtn.addEventListener("click", function () {
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter something";
    notes.appendChild(input);
    input.classList.add("note-input");
    input.focus();
});