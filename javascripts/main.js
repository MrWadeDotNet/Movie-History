
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
  ["jquery","lodash","firebase", "hbs", "bootstrap", "retrieveAndLoad", "display","viewed","remove", "rating"],
  function($, _, _firebase, Handlebars, bootstrap, RAL, display,addViewed,deleteFromDb, addRating) {
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
    console.log(datakey);
      deleteFromDb(datakey);
       });

   $(document).on("click", '.rating', function() {
    console.log("this button works");
    var datakey = ($(this).parent().attr('data-key'));
    var input = $(this).prev().val();

      addRating(datakey, input);
       });

    $(document).on("click", '.moviedata', function() {
      var datakey = ($(this).attr('data-key'));
      console.log(datakey);
       var myFirebaseRef = new Firebase("https://movie-application.firebaseio.com/movies/");
       myFirebaseRef.once("value", function(snapshot) {
        var movies = snapshot.val();
      
        $(".actors").html(movies[datakey].Actors);
        $(".released").html(movies[datakey].Released);
     // console.log(movies[datakey].watched);
     //Check for Watched Movie
     if(movies[datakey].watched === true) {
          watchedText = "Yes";
        }
         else {
           watchedText = "No";
          }

       $(".iswatched").html(watchedText);
       });
    });  

  /*  $(document).on("click", ".moviedata", function() { 
      console.log(this);
    $(".bottom-container").toggleClass('show');
    $(".bottom-container").toggleClass('hide');
}); */
  
 });