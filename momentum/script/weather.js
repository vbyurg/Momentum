const cityInput = document.querySelector('.city'); // поле ввода города
const weatherIcon = document.querySelector('.weather-icon'); // иконка погоды
const weatherError = document.querySelector('.weather-error'); // ошибка при некорректном вводе названия города
const temperature = document.querySelector('.temperature'); // температура
const weatherDescription = document.querySelector('.weather-description'); // описание погоды (дождь/снег/слякоть и т.д.)
const windBlock = document.querySelector('.wind'); // скорость ветра
const humidityBlock = document.querySelector('.humidity'); // влажность воздуха

cityInput.addEventListener('change', cityChoice);
// Choice city
function cityChoice() {
    city = cityInput.value;
    if (city) {
        getWeather(city);
    };
}
// Get weather info from API
async function getWeather() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=3ad7a98561014b40ee447e2216eaafa1&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    // Err
    if (res.status > 400 && res.status < 600) {
        weatherError.textContent = `Ошибка! Город "${city}" не найден`;
        weatherIcon.className = 'weather-icon owf';
        temperature.textContent = ``;
        humidityBlock.textContent = ``;
        windBlock.textContent = ``;
        weatherDescription.textContent = '';
    } else {
        // Clean error text
        weatherError.textContent = ``;
        // Add weather icon
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);

        // Show temperature info
        temp = Math.round(data.main.temp);
        temperature.textContent = `${temp} °C`;

        // Show humidity info
        humidity = Math.round(data.main.humidity);
        humidityBlock.textContent = `Влажность ${humidity} %`;

        // Show wind info
        wind = Math.round(data.wind.speed);
        windBlock.textContent = `Ветер ${wind} м/с`;

        // Show weather description
        weatherDescription.textContent = data.weather[0].description;
    }
}

getWeather()

// Set city value to localStorage
function setCity() {
    localStorage.setItem('city', cityInput.value);
    getWeather()
}
window.addEventListener('beforeunload', setCity);

// Get city value from localStorage
function getCity() {
    if (localStorage.getItem('city')) {
        cityInput.value = localStorage.getItem('city');
    }
    cityChoice()
}
window.addEventListener('load', getCity);