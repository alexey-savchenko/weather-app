$(document).ready(function() {

});

$("#btn").on("click", function() {
   var apiKey = "9b9fd0eacc5ce0d54dfd31b7bf34ceba";
   var url = 'http://api.openweathermap.org/data/2.5/weather';
   $.getJSON(
         url +
         "?q=" + $("#city").val() +
         "&mode=json" +
         "&units=metric" +
         "&appid=" + apiKey)
      .done(function(data) {
         $("#info").html("<p> Current temp is " + data.main.temp + " °C" + "</p>" +
            "<p> Current humidity is " + data.main.humidity + " %" + "</p>");
         console.log(data.main.temp);
      })
      .fail(function(e) {
         alert(e);
      });
});