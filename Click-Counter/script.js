let count = 0;

const display = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

function updateDisplay() {
    display.innerText = count;

    if (count > 10) {
        display.classList.add('high');
    } else {
        display.classList.remove('high');
    }
}

inc.addEventListener("click", function () {
    count++;
    updateDisplay();
});

dec.addEventListener("click", function () {
    count--;
    updateDisplay();
});

reset.addEventListener("click", function () {
    count = 0;
    updateDisplay();
});
if (count > 10) {
    display.classList.add('high');
} else {
    display.classList.remove('high');
}