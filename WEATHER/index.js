

  function getData()
  {
      let city = document.getElementById("city").value;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=668a3f7f17682d9521a8d7558ac6e552`


fetch(url)
 .then(function(res){

     return res.json();
 })
  .then(function(res){

    console.log(res);
      append(res);                // calling from here 
  })
  .catch(function(err){

      console.log(err);
  })


  }

  function append(data){

    let display= document.getElementById("display");
    display.innerHTML = null;

    // let map = document.getElementById("display_map");
    
  let map = document.getElementById("gmap_canvas");


    
  let city = document.createElement("h4");
  city.innerText = `City: ${data.name}`;

  let min = document.createElement("h6");
  min.innerText = `Min temp: ${data.main.temp_min}`;

  let max = document.createElement("h6");
  max.innerText = `Max temp: ${data.main.temp_max}`;

  let current = document.createElement("h5");
  current.innerText = `Current Temp: ${data.main.temp}`;

  let sunrise = document.createElement("p");
  sunrise.innerText = `sunrise: ${data.sys.sunrise}`;

  let sunset = document.createElement("p");
  sunset.innerText = `sunset: ${data.sys.sunset}`;

  let clounds = document.createElement("h6");
  clounds.innerText = `clounds: ${data.clouds.all}`;

  let wind = document.createElement("p");
  wind.innerText = `wind: ${data.wind.speed}`;

  display.append(city, min, max, current,sunrise,sunset, clounds,wind);

  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }

