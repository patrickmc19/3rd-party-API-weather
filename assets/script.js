var weatherAPI = '127337ecf2639c829a50c27f0e45f8c0';
var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?q='
var search = $("#search");

// on load set item and return previous searches as buttons.

function getWeather() {
    var city = $("#aside").children("input").val();
    // set item for city searched
    fetch(fiveDay + city + "&units=imperial&limit=1&appid=" + weatherAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 2; i < data.list.length; i = i + 8) {
                $("#five-day-card").append(`<div class="col-sm-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>`)
            }
            fetch(weatherURL + city + "&units=imperial&appid=" + weatherAPI)
                .then(function (response2) {
                    return response2.json();
                })
                .then(function (data2) {
                    $("#city-name").append(`${data2.name} ${moment(data2.dt, "X").format('MM/DD/YYYY')} <img id="weather-icon" src= "http://openweathermap.org/img/wn/${data2.weather[0].icon}@2x.png">`)
                    var currentTemp = data2.main.temp;
                    $("#temp").text("Temp: " + currentTemp);
                    var currentWind = data2.wind.speed;
                    $("#wind").text("Wind: " + currentWind);
                    var currentHumidity = data2.main.humidity;
                    $("#humidity").text("Humidity: " + currentHumidity)
                })
        })
}

$("#search").on("click", getWeather)