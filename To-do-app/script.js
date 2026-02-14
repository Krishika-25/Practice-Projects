let input = document.getElementById("field")
let addtask = document.querySelector(".btn")
let tasklist = document.querySelector(".tasklist")
let tasks = JSON.parse(localStorage.getItem("tasks")) || []
function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function render() {
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
        li.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            save();
            render();
        });

        tasklist.appendChild(li);
    });
}

addtask.addEventListener("click", function () {
    let text = input.value.trim();
    if (text === "") return;
    tasks.push({ text: text, completed: false });
    save();
    render();
    input.value = "";
});
render();






