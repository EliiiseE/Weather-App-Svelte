const API_key =__myapp.env.API_WEATHER_KEY

const GetData = (CityName) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+CityName+'&appid='+API_key+'&units=metric')
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.main.temp)
    })
    .catch(function(error) {
        console.log(error);
    });
}

GetData('Boston')