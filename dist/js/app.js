window.addEventListener("load", () =>{
    
    let long;
    let lat;

    let wigetData = document.querySelector(".wiget__data");
    let wigetLocation = document.querySelector(".wiget__location");
    let wigetTimezone = document.querySelector(".wiget__data .city");
    let wigetTemperature = document.querySelector(".wiget__temperature span");
    let summaryInfo = document.querySelector(".wiget__temperature p");
    let descriptionForToday = document.querySelector(".info__about p");
    let windInfo = document.querySelector(".info__ms span");
    let mph = document.querySelector(".info__mph span");
    let mmh = document.querySelector(".info__pressure span");
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`
            const api = `${proxy}https://api.darksky.net/forecast/0f7df4b5de8d974be48c932c550c745b/${lat},${long}`;
            
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temperature, summary, windSpeed, pressure, humidity} = data.currently;
                // magic set DOM Element from the API
                wigetTemperature.textContent = temperature;
                summaryInfo.textContent = summary;
                wigetTimezone.textContent = data.timezone;
                windInfo.textContent = windSpeed;
                descriptionForToday.textContent = data.hourly.summary;
                mph.textContent = humidity;
                mmh.textContent = pressure;
            });
        });

        

     } 

        let now = new Date();
        let date = document.querySelector('.date');
        date.innerHTML = dateBuilder(now);

     function dateBuilder (d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];      // for future
      
        // let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
      
        return `${date} ${month} ${year}`;
      }


})

