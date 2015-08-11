
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
  ["jquery","lodash","firebase", "hbs", "bootstrap", "retrieveAndLoad", "display"],
  function($, _, _firebase, Handlebars, bootstrap, RAL, display) {
    var myFirebaseRef = new Firebase("https://movie-application.firebaseio.com/");
    myFirebaseRef.child("movies").on("value", function(snapshot) {
      console.log(snapshot.val());
      var movies = snapshot.val();
      console.log(movies);
      var allMoviesArray=[];
       // Convert Firebase's object of objects into an array of objects
      for (var key in movies) {
        allMoviesArray[allMoviesArray.length] = movies[key];
      }
      console.log(allMoviesArray);
      allMoviesObject = {movies: allMoviesArray};
//////////////////////////////////////////////////
      display(allMoviesArray);
    });

    $('#submitmovie').on("click", function(){
      RAL();
    });
});