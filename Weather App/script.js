const apikey = "6ba8e68d3e10e88796687e958801bef8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".serch input");
const searchBtn = document.querySelector(".serch button");
const weatherIcon = document.querySelector(".weather-icon");



  async function checkWeather(city){
  const responce = await fetch(apiUrl + city + `&appid=${apikey}`); 

  if(responce.status == 404)
  {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else
  {
    var data = await responce.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds")
    {
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
      weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {
      weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
      weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
      weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
    
  }

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
