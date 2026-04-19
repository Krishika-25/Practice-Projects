let output = document.querySelector(".password");
let generatebutton = document.querySelector(".btn");
generatebutton.addEventListener("click", function () {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }

    output.textContent = pass;
});