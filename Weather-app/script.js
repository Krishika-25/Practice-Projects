let cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById("SearchBtn");
let apiKey = "bd6a33449ea1083bef77eccc464f58c6";


let cityName = document.querySelector(".city");
let temp = document.querySelector(".temp");
let condition = document.querySelector(".condition");

searchBtn.addEventListener("click", async function () {
    let city = cityInput.value.trim();
    if (city == "") {
        alert("Please Enter valid city");
        return;
    }


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    cityName.innerText = data.name;
    temp.innerText = `${data.main.temp}°C`;

    condition.innerText = data.weather[0].main;
})