window.addEventListener("load", () =>{                     // this is not my work, i just saw this and try to repeated

  

const api = {
  key: "eb3e6291bd4907d98c4d3ca59fa6d58a",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    // console.log(searchbox.value);                    for future
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}
              
            //  Magic
          
function displayResults (weather) {
  console.log(weather);
  let place = document.querySelector('.city');
  place.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date');
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector('.wiget__temperature span');
  temp.innerHTML = `${Math.round(weather.main.temp)}<sup>o</sup>`;

  let state = document.querySelector('.wiget__temperature p');
  state.innerHTML = `${weather.weather.main} but i tried`;  // this undefind ( 

  let ms = document.querySelector('.info__ms span');
  ms.innerHTML = `${weather.wind.speed}`;

  let mph = document.querySelector('.info__mph span');
  mph.innerHTML = `${weather.main.humidity}`;

  let pressure = document.querySelector('.info__pressure span');
  pressure.innerHTML = `${weather.main.pressure}`;

  let info = document.querySelector('.info__about p');
  info.innerHTML = `${weather.weather.description}`; //dont know why this thing not work ( , but i keep it
}


      // for show date
function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];      // for future

  // let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year}`;
}

});