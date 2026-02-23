let count = 0;
let history = [];

const display = document.getElementById("count");
const historyList = document.getElementById("history");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

const savedHistory = localStorage.getItem("countHistory");
if (savedHistory) {
    history = JSON.parse(savedHistory);
    if (history.length > 0) count = history[history.length - 1];
}

if (history.length === 0) {
    history.push(count);
}

updateDisplay();

function updateDisplay() {
    display.innerText = count;

    if (count > 10) display.classList.add('high');
    else display.classList.remove('high');

    historyList.innerHTML = "";
    history.forEach(val => {
        const li = document.createElement("li");
        li.innerText = val;
        if (val > 10) li.classList.add('high');
        historyList.appendChild(li);
    });

    localStorage.setItem("countHistory", JSON.stringify(history));
}

function addToHistory() {
    history.push(count);
    updateDisplay();
}

inc.addEventListener("click", () => { count++; addToHistory(); });
dec.addEventListener("click", () => { count--; addToHistory(); });
reset.addEventListener("click", () => { count = 0; addToHistory(); });