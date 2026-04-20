let start = document.querySelector(".start-btn");
let quiz = document.querySelector(".quiz");
let options = document.querySelector(".options");

let questions = [
    {
        question: "What is capital of Scotland?",
        options: ["Edinburgh", "Berlin", "Paris", "Rome"],
        answer: "Edinburgh"
    },
    {
        question: "What is capital of Germany?",
        options: ["Madrid", "Berlin", "Lisbon", "Vienna"],
        answer: "Berlin"
    },
    {
        question: "What is capital of France?",
        options: ["Paris", "Rome", "Berlin", "London"],
        answer: "Paris"
    }
];

let index = 0;
let correct = "";

function showQuestion() {

    quiz.innerHTML = "";
    options.innerHTML = "";

    let q = questions[index];

    let li = document.createElement("li");
    li.textContent = q.question;
    quiz.appendChild(li);

    q.options.forEach(opt => {
        let option = document.createElement("li");
        option.textContent = opt;
        options.appendChild(option);
    });

    correct = q.answer;
}

start.addEventListener("click", function () {
    index = 0;
    showQuestion();
});

options.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {

        let all = document.querySelectorAll(".options li");

        all.forEach(a => {
            a.classList.remove("correct");
            a.classList.remove("wrong");
        });

        if (e.target.textContent === correct) {
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("wrong");

            all.forEach(a => {
                if (a.textContent === correct) {
                    a.classList.add("correct");
                }
            });
        }

        setTimeout(() => {
            index++;

            if (index < questions.length) {
                showQuestion();
            } else {
                quiz.innerHTML = "<li>Quiz Finished</li>";
                options.innerHTML = "";
            }

        }, 3000);
    }
});