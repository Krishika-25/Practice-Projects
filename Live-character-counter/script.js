let userinput=document.querySelector(".input-text")
let display=document.getElementById("result")
userinput.addEventListener("input", function(){
    let text= userinput.value.trim()
    display.innerHTML = `Character count: ${text.length}`;
})