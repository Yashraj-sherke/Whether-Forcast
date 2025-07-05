const apiKey ="4985a91364687e16c85851c3f2b1deea";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");

async function checkweather(city){

    const response =await fetch(apiURL+city+`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
       

}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

checkweather();