var weatherAPI = '127337ecf2639c829a50c27f0e45f8c0';
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
var geocodeAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var city = document.getElementById("#cityinput");
var search = $("#search");
var ulCity = $("#ul");
var today = dayjs().format();

function getCoords() {
    navigator.geolocation.getCurrentPosition(success);
    var city = $("#aside").children("input").val();
    fetch(geocodeAPI + city + "&limit=1&appid=" + weatherAPI)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var lon = data.lon;
            console.log(lon);
            var lat = data.lat;
            console.log(lat);
            fetch(weatherURL + "?lat=" + lat + "&lon" + lon + "&appid=" + weatherAPI)
                .then(function (response2) {
                    return response2.json();
                })
            })
                .then (function (data2) {
                    console.log(data2)
                var currentTemp = data2.main.temp;
                console.log(currentTemp)
                var currentWind = data2.wind.speed;
                console.log(currentWind)
                var currentHumidity = data2.main.humidity;
                console.log(currentHumidity)
                })
}

function getWeatherData() {

}

$("#search").on("click", getCoords)