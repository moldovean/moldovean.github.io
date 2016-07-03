Geo = {};

function getLocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;

      //alert("aia "+position.coords.latitude);
      $("#position").html("Lat: "+Geo.lat+ " Long: "+ Geo.lng);
    }, errorPosition);
  };
}

function errorPosition(){
  console.log("Could not get poisition");
  $("#location").html("Could not get poisition");
}


$(document).ready(function(){
  getLocation();

  $("h1").css('text-align','center');
  $("*").css('text-align','center');

  $("#getWeather").on("click",function(){

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+Geo.lat+"&lon="+Geo.lng+"&appid=68e04023d26c39a8aae3957947263214", function(data){
      $("#demo").html(JSON.stringify(data));
      $("#temperature").html("Temperature "+(data.main.temp-273.15) +" °C");
      $("#location").html(data.sys.country+", "+data.name);
      $("#sky").html("Sky: "+data.weather[0].main+ ": "+data.weather[0].description+"<img src='"+"http://openweathermap.org/img/w/"+data.weather[0].icon+".png"+"'>");
      $("#humidity").html("Humidity: "+data.main.humidity);
      //$("#pressure").html("Pressure " + data.main.pressure );

    })
  });


});
