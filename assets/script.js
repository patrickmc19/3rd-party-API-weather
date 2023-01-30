var weatherAPI = '127337ecf2639c829a50c27f0e45f8c0';
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
var geocodeAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var city = document.getElementById("#cityinput");
var search = $("#search");
var ulCity = $("#ul");
var today = dayjs().format();

function getWeather() {
    var city = $("#aside").children("input").val();
    fetch(geocodeAPI + city + "&limit=1&appid=" + weatherAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lon = data.lon;
            var lat = data.lat;
            fetch(weatherURL + "?lat=" + lat + "&lon" + lon + "&appid=" + weatherAPI);
            // var currentTemp = data.main.temp;
            // var currentWind = data.wind.speed;
            // var currentHumidity = data.main.humidity;
        })
}

$("#city-input").on("click", getWeather)