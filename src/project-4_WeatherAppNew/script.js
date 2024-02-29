// const city = "japan,kudus regesngy,central java,indonesia";

// const apiKey = '99e7fee6ae55fcad7a22c8927be7a3e8';
//  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//  async function fetchData() {
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     console.log(data.main.temp);
//  }

//  fetchData();

const container = document.querySelector(".sub-container");
const cityInput = document.querySelector(".city");
const description = document.querySelector(".description");
const temprature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind-speed");
const searchBtn = document.querySelector(".searchBtn");
const image = document.querySelector(".weather-box img");
const weatherBox = document.querySelector(".weather-box");
const error404 = document.querySelector(".error404");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    
    if(city === '') {
        return;
    }

    fetchWeatherData(city)
    .then (data => {

        if(data.cod == '404') {
            container.style.height = '400px';
            weatherBox.classList.remove("active");
            error404.classList.add("active");
            return;
        }

            container.style.height = '540px';
            weatherBox.classList.add("active");
            error404.classList.remove("active");

        switch (data.condition) {
            case 'Clear':
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825778.png";
                break;

            case 'Rain':
                image.src = "https://cdn-icons-png.flaticon.com/256/6376/6376092.png";
                break;

            case 'Snow':
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825747.png";
                break;

            case 'Cloud':
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825713.png";
                break;

            case 'Mist':
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825704.png";
                break;

            case 'Haze':
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825713.png";
                break;

            case 'Thunderstorm':
                image.src = "https://cdn-icons-png.flaticon.com/128/1959/1959321.png";
                break;
        
            case 'Drizzle':
                image.src = "https://cdn-icons-png.flaticon.com/128/7084/7084489.png";
                break;
        
            default:
                image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825713.png";
        }

        temprature.innerHTML = `${parseInt(data.temperature)}<span class="absolute text-3xl">°C</span>`;
        humidity.textContent = `${data.humidity}%`
        wind.textContent = `${parseInt(data.windSpeed)}Km/sec`;
        description.textContent = data.description;

    })
})


async function fetchWeatherData(city) {
    const APIKey = "99e7fee6ae55fcad7a22c8927be7a3e8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            condition: data.weather[0].main,
            
        };
    }catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

