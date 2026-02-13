let input = document.getElementById("field")
let addtask = document.querySelector(".btn")
let tasklist = document.querySelector(".tasklist")

addtask.addEventListener("click", function () {
    let text = input.value
    let li = document.createElement("li")
    li.innerText = text
    tasklist.appendChild(li)
    input.value = ""
    let del = document.createElement("button")
    del.innerText = "✖"
    li.appendChild(del)
    del.classList.add("del-btn")
    del.addEventListener("click", function () {
        li.remove()
    })
    li.addEventListener("click", function () {
        li.classList.toggle("completed")
    })
})



