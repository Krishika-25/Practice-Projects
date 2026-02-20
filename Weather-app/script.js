let cityInput = document.getElementById("city-input");
let searchBtn = document.getElementById("SearchBtn");
let apiKey = "ff71243e917cd70febd745ca27c7b0fe";

let weatherBox = document.querySelector(".weather-box");

searchBtn.addEventListener("click", async function () {
    let city = cityInput.value.trim();
    if (city == "") {
        alert("Please Enter valid city");
        return;
    }
    cityInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    weatherBox.innerHTML = `<p>Loading...</p>`;
    try {
        let response = await fetch(url);

        if (!response.ok) {
            weatherBox.innerHTML = `<p>City not found ❌</p>`;
            return;
        }

        let data = await response.json();

        weatherBox.innerHTML = `
    <h2 class="city">${data.name}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <p class="temp">${Math.round(data.main.temp)}°C</p>
    <p class="condition">${data.weather[0].main}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${data.wind.speed} km/h</p>
`;
    } catch (error) {
        weatherBox.innerHTML = `<p>Something went wrong ⚠️</p>`;
    }
    cityInput.value = "";
})

