const searchBtn = document.querySelector(".search-btn");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

searchBtn.addEventListener("click", () => {
    
    const city = document.querySelector(".city").value;
    const image = document.querySelector(".weather-box img");
    const temprature = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity span");
    const wind = document.querySelector(".wind-speed span");
    const discription = document.querySelector(".discription");

    async function fetchWeatherData() {
        const APIKey = "99e7fee6ae55fcad7a22c8927be7a3e8";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
    
        try {
            const response = await fetch(apiUrl);
            if(!response.ok) {
                throw new Error("Weather Data Not Available!");
            }
            const data = await response.json();

            switch (data.weathe[0].main) {
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
            
                default:
                    image.src = "https://cdn-icons-png.flaticon.com/256/5825/5825713.png";
            
            }

            temprature.innerHTML = `${parseInt(data.main.temp)}<span class="absolute text-3xl">°C</span>`;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind.innerHTML = `${data.wind.speed}Km/sec`;
            discription.innerHTML = `${data.weather[0].discription}`

        } catch (error) {
            alert("'Error fetching weather data:', error");
        }
    }
})

