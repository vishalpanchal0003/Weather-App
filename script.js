const btn = document.getElementById('srch');
const display = document.getElementById('display');
const wedImg = document.getElementById('weatherImg');


const apiKey = "001197b7a6ab7691aa3ee7b14fa4daf4"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";



async function cheakWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    // console.log(data.weather.main)
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".deg").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".air").innerHTML = data.wind.speed + "km/h"
    // weatherName.innerHTML = data.weather;

    if (data.weather[0].main == "Clouds") {
        wedImg.src = "img3.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description;

        
    } else if (data.weather[0].main == "Rain") {
        wedImg.src = "img8.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Clear") {
        wedImg.src = "clear.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Cartly cloud") {
        wedImg.src = "img2.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Cvercast") {
        wedImg.src = "overcast.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Drizzle") {
        wedImg.src = "img8.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Snow") {
        wedImg.src = "snow.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Storm") {
        wedImg.src = "weather.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
    else if (data.weather[0].main == "Haze") {
        wedImg.src = "haze.png"
        document.querySelector(".weather-name").innerHTML = data.weather[0].description; 


    }
}

btn.addEventListener('click', () => {
    cheakWeather(display.value);
    document.querySelector(".weather").style.display = "block"

})
