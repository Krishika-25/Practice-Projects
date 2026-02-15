let input = document.getElementById("field")
let addtask = document.querySelector(".btn")
let tasklist = document.querySelector(".tasklist")
let clearBtn = document.querySelector(".clear-btn");
let counter = document.querySelector(".counter");
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

console.log("Loaded tasks:", tasks);

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Saving tasks:", tasks);
}
function render() {
    console.log("Rendering tasks:", tasks);
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task.text;
        if (task.completed) {
            li.classList.add("completed");
        }

        let del = document.createElement("button")
        del.innerText = "✖"
        li.appendChild(del)
        del.classList.add("del-btn")
        del.addEventListener("click", function (e) {
            e.stopPropagation();
            tasks.splice(index, 1);
            save();
            render();
        });
        let edit = document.createElement("button");
        edit.innerText = "✏️";
        edit.classList.add("edit-btn");
        li.appendChild(edit);
        edit.addEventListener("click", function (e) {
            e.stopPropagation();
            let newText = prompt("Edit task:", tasks[index].text);
            if (newText === null) return;   
            newText = newText.trim();
            if (newText === "") return;     
            tasks[index].text = newText;
            save();
            render();
        });


        li.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            save();
            render();
        });
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                addtask.click();
            }
        });

        tasklist.appendChild(li);
    });
}
clearBtn.addEventListener("click", function () {
    tasks = tasks.filter(task => !task.completed);
    save();
    render();
});

addtask.addEventListener("click", function () {
    let text = input.value.trim();
    if (text === "") return;
    tasks.push({ text: text, completed: false });
    save();
    render();
    input.value = "";
});

function updateCounter() {
    let total = tasks.length;
    let completed = tasks.filter(task => task.completed).length;
    let pending = total - completed;

    counter.innerText = `Total: ${total} | Pending: ${pending} | Completed: ${completed}`;
}
updateCounter();

render();






