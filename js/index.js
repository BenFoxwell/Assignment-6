// Delay code from executing until all DOM assets have been loaded
$(document).ready(function() {
   //Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"
   var cities = ['NY', 'SF', 'LA', 'ATX', 'SYD'];
   //use the array to add values to the #city-type menu 
   cities.forEach(function(city){
    //Use append to add cities to the drop down menu
    $('select').append('<option>' + city + '</option>');
     
    $('select').change(function (){
      // Store user input for city type
      var citySelect = $('#city-type').val();
      // Create conditionals to control updating of background image depending on user input
      if(citySelect === cities[0]) {
         $('body').attr('class', 'nyc');
      } else if(citySelect === cities[1]) {
         $('body').attr('class', 'sf');
      } else if(citySelect === cities[2]) {
         $('body').attr('class', 'la');
      } else if(citySelect === cities[3]) {
         $('body').attr('class', 'austin');
      } else if(citySelect === cities[4]) {
         $('body').attr('class', 'sydney');
      } else {$('body').attr('class', 'default');}
    });

   });

});


