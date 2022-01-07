const API_KEY = "6835627f21b2b4e297f1c22f850cf3e1";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const info = fetch(url).then(response => response.json()).then(data=>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });

}

function onGeoError(){
    alert("Can't find you. No weathre for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);