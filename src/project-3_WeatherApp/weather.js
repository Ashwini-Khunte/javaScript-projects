const container = document.querySelector(".main-container");
const searchBtn = document.querySelector(".search-btn");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

searchBtn.addEventListener("click", () => {

    const APIKey = "99e7fee6ae55fcad7a22c8927be7a3e8";
    const city = document.querySelector(".input");

    if(city === '') 
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    .then(Response => Response.json())
    .then(json => {
        
        const image = document.querySelector(".weather-box img");
        const temprature = document.querySelector(".weather-box .temp");
        const discription = document.querySelector(".weather-box .weather-details");
        const humidity = document.querySelector(".weather-info .humidity span");
        const wind = document.querySelector(".weather-info .wind-speed span");

        switch (json.weather[0].main) {
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
    })
})