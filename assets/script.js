var weatherAPI = '127337ecf2639c829a50c27f0e45f8c0';
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
var city = document.getElementById("#cityinput");
var search = $("#search");
var ulCity = $("#ul");

function getAPI() {
    // "coord.lon" - geocodes city longitude
    // "coord.lat" - geocodes city latitude
    // "main.temp" - gathers city temp
    // "wind.speed" - gathers city wind speed
    // "main.humidity" - gathers city humidity
    // "weather.main" - use to create if statement for visual weather icon
}

function getWeather() {
    fetch(weatherURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        for (let i = 0; i < array.length; i++) {
            
        }
    })
}

search.addEventListener("click", getWeather)