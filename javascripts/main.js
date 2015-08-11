
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash' : '../bower_components/lodash/lodash',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery","lodash","firebase", "hbs", "bootstrap"],
  function($, _, _firebase, Handlebars, bootstrap) {
    $('#submitmovie').on("click", function(){
      var userInput = $('#inputTitle').val();
      console.log(userInput);
      $.ajax({
        url:"http://www.omdbapi.com/?t=" + userInput,
        method: "GET"
      }).done(function(data){
        console.log(data)
        $.ajax({
          url: "https://movie-application.firebaseio.com/.json",
          method: "POST",
          data: JSON.stringify(data)
        }).done(function(){
          console.log("loaded to firebase");
          });
      })
    });
    
  });