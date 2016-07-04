Geo = {};



function errorPosition(){
  console.log("Could not get poisition");
  $("#location").html("Could not get poisition");
}


$(document).ready(function(){

  $("#getWeather").on("click",function(){location.reload();});

  $("h1").css('text-align','center');
  $("*").css('text-align','center');
  //$("p").css('text-size','1.5em');

  reqGeoLocation = new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(function(position){
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
      $("#position").html("<i class='fa fa-crosshairs'></i> Lat: "+Math.round(Geo.lat*10000)/10000+ " Lng: "+ Math.round(Geo.lng*10000)/10000);
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
      $("#temperature").html("<i class='wi wi-thermometer'></i> "+Math.round((data.main.temp-273.15)*10)/10 +" <i class='wi wi-celsius'></i>, "+"<i class='wi wi-humidity'></i> "+data.main.humidity+"%");
      $("#location").html("<img src='"+"http://openweathermap.org/img/w/"+data.weather[0].icon+".png"+"'>"+data.sys.country+", "+data.name);
      $("#humidity").html("<i class='wi wi-humidity'></i> "+data.main.humidity);
      $("#pressure").html("<i class='wi wi-barometer'></i> "+data.main.pressure+ " hPa");

      if(data.visibility !=undefined) $("#visibility").html(", Visibility: "+data.visibility + " m");
      else $("#visibility").html("");

      var windHTML = "Wind speed: "+data.wind.speed+ " m/s ";
      if(data.wind.deg != "") windHTML+=" direction "+data.wind.deg+"&deg";
      $("#wind").html(windHTML);
      skyHTML=""+ ": "+data.weather[0].description+ ", Cloudiness "+data.clouds.all+"%";

      reqWeatherIcons = new Promise(function(resolve, reject){
        weatherIcons = $.getJSON("js/icons.json");
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
