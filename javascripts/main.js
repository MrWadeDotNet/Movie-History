
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
  ["jquery","lodash","firebase", "hbs", "bootstrap", "retrieveAndLoad", "display","viewed","remove"],
  function($, _, _firebase, Handlebars, bootstrap, RAL, display,addViewed,deleteFromDb) {
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
      allMoviesObject = {movies: allMoviesArray};

      display(movies);  
      //changeViewedValue(key);
    
    // BUG TO WORK ON 
    // IF USER DOES NOT REFRESH PAGE AFTER ADDING SONG AND IMMEDIATELY SELECTS "WATCHED" A NEW KEY IS CREATED WITH VALUE "WATCHED: TRUE" AND MOVIE KEY IS ALSO SET "WATCHED:TRUE"


    });

    $('#submitmovie').on("click", function(){
      RAL();
      });

   $(document).on("click", '.isviewed', function() {
    var datakey = ($(this).parent().attr('data-key'));

      addViewed(datakey);
       });

   $(document).on("click", '.delete', function() {
    var datakey = ($(this).parent().attr('data-key'));
      deleteFromDb(datakey);
       });

      
  
  });