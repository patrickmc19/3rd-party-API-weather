var API = '127337ecf2639c829a50c27f0e45f8c0';
var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';
var fiveDayForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='
var search = $("#search");
var searchHistory = [];

// function pastSearches() {
//     for (let i = 0; i < data.data.length; i++) {
//         var text = localStorage.getItem("data", i)
//         $("#aside").children("#ul").append(`<li id="old"><button id=old-search>` + text + `</button></li>`)

//     }
// }

// pastSearches()
function getWeather() {
    var city = $("#aside").children("input").val();
    fetch(fiveDayForecast + city + "&units=imperial&limit=1&appid=" + API)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.list.length; i = i + 8) {
                $("#day-" + i).empty();
                $("#temp-" + i).empty();
                $("#wind-" + i).empty();
                $("#humidity-" + i).empty();
                $("#day-" + i).append(`${moment(data.list[i].dt, "X").format('MM/DD/YYYY')} <img id="weather-icon1" src= "http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png">`);
                $("#temp-" + i).append(" " + `${data.list[i].main.temp}` + "°F");
                $("#wind-" + i).append(" " + `${data.list[i].wind.gust}` + " MPH");
                $("#humidity-" + i).append(" " + `${data.list[i].main.humidity}` + " %");
            }
            fetch(currentWeather + city + "&units=imperial&appid=" + API)
                .then(function (response2) {
                    return response2.json();
                })
                .then(function (data2) {
                    $("#city-name").empty();
                    $("#city-name").append(`${data2.name} ${moment(data2.dt, "X").format('MM/DD/YYYY')} <img id="weather-icon" src= "http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png">`)
                    var currentTemp = data2.main.temp;
                    $("#temp").text("Temp: " + currentTemp + "°F");
                    var currentWind = data2.wind.speed;
                    $("#wind").text("Wind: " + currentWind + " MPH");
                    var currentHumidity = data2.main.humidity;
                    $("#humidity").text("Humidity: " + currentHumidity + " %")
                })
        })
}

$("#search").on("click", getWeather)
$("#search").click(function () {
    var pastSearch = $("#aside").children("input").val();
    searchHistory.push(pastSearch);
    localStorage.setItem("data", searchHistory);
    console.log(searchHistory);
})