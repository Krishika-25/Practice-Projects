let getQuoteBtn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

getQuoteBtn.addEventListener("click", async function () {

    quote.textContent = "Loading...";
    author.textContent = "";

   let url = "https://dummyjson.com/quotes/random";

    try {
        let response = await fetch(url);

        if (!response.ok) {
            quote.textContent = "Quote not available ❌";
            return;
        }

        let data = await response.json();

        quote.textContent = `"${data.quote}"`;
author.textContent = `- ${data.author}`;

    } catch (error) {
        quote.textContent = "Something went wrong ⚠️";
    }
});