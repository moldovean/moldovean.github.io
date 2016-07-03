Geo = {};



function errorPosition(){
  console.log("Could not get poisition");
  $("#location").html("Could not get poisition");
}


$(document).ready(function(){


  $("h1").css('text-align','center');
  $("*").css('text-align','center');
  //$("p").css('text-size','1.5em');

  reqGeoLocation = new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(function(position){
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
      $("#position").html("Lat: "+Math.round(Geo.lat*100)/100+ " Long: "+ Math.round(Geo.lng*100)/100);
      resolve(Geo);
    }, errorPosition);
  });



  reqGeoLocation.then(function(resolve){
    reqWeatherData = new Promise(function(resolve, reject){
      weatherData = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+Geo.lat+"&lon="+Geo.lng+"&appid=68e04023d26c39a8aae3957947263214");
      resolve(weatherData);
    });
    reqWeatherData.then(function(data){
      //$("#demo").html(JSON.stringify(data));
      $("#temperature").html("<i class='wi wi-thermometer'></i> "+Math.round((data.main.temp-273.15)*10)/10 +" <i class='wi wi-celsius'></i>");
      $("#location").html("<img src='"+"http://openweathermap.org/img/w/"+data.weather[0].icon+".png"+"'>"+data.sys.country+", "+data.name);
      $("#humidity").html("<i class='wi wi-humidity'></i> "+data.main.humidity);
      $("#pressure").html("<i class='wi wi-barometer'></i> "+data.main.pressure);
      $("#visibility").html("Visibility: "+data.visibility + " feet");
      $("#wind").html("Wind speed: "+data.wind.speed);
      skyHTML=""+ ": "+data.weather[0].description+ " No: "+data.clouds.all;

      reqWeatherIcons = new Promise(function(resolve, reject){
        weatherIcons = $.getJSON("https://gist.githubusercontent.com/tbranyen/62d974681dea8ee0caa1/raw/3405bfb2a76b7cbd90fde33d8536f0cd13706955/icons.json");
        resolve(weatherIcons);
      });
      reqWeatherIcons.then(function(weatherIcons){
          var prefix = 'wi wi-';
          var code = data.weather[0].id;
          var icon = weatherIcons[code].icon;

          if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            if(data.dt>=data.sys.sunset) icon = 'night-' + icon;
            else icon = 'day-' + icon;
          };
          icon = prefix + icon;
          skyHTML="<i class='"+icon+"'></i>"+skyHTML;
          $("#sky").html(skyHTML);
      }, function(reject){});



    }, function(reject){});


  },function(reject){});






});
