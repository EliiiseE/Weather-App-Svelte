import { API_key } from '../../store';

function GetCurrentData (CityName) {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q='+CityName+'&appid='+API_key+'&units=metric')
    .then((resp) => resp.json())
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        console.log(error)
    })
}

export default GetCurrentData