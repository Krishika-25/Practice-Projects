let screen = document.querySelector(".screen p");
let buttons = document.querySelectorAll(".btn");

let operators = ["+", "-", "*", "/"];

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        let value = button.innerText;

        if (
            screen.innerText === "Please enter number" ||
            screen.innerText === "Error ❌"
        ) {
            screen.innerText = "";
        }

        if (value === "Clear") {
            screen.innerText = "";
        }

        else if (value === "Del") {
            screen.innerText = screen.innerText.slice(0, -1);
        }

        else if (value === "=") {

            let expression = screen.innerText;

            if (expression === "") {
                screen.innerText = "Please enter number";
                return;
            }

            let lastChar = expression.slice(-1);

            if (operators.includes(lastChar)) {
                expression = expression.slice(0, -1);
            }

            if (/\/0(?!\d)/.test(expression)) {
                screen.innerText = "Error ❌";
                return;
            }

            try {
                let result = eval(expression);

                if (!isFinite(result)) {
                    screen.innerText = "Error ❌";
                } else {
                    screen.innerText = result;
                }

            } catch {
                screen.innerText = "Error ❌";
            }
        }

        else if (operators.includes(value)) {

            if (screen.innerText === "") return;

            let lastChar = screen.innerText.slice(-1);

            if (operators.includes(lastChar)) {
                screen.innerText =
                    screen.innerText.slice(0, -1) + value;
            } else {
                screen.innerText += value;
            }
        }
        else {

            let parts = screen.innerText.split(/[\+\-\*\/]/);
            let lastNumber = parts[parts.length - 1];

            if (lastNumber === "0" && value === "0") {
                return;
            }

            if (lastNumber === "0" && value !== "0") {
                screen.innerText =
                    screen.innerText.slice(0, -1) + value;
            } else {
                screen.innerText += value;
            }
        }

    });
});