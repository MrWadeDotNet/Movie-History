
define(function(keydata){
  return function(keydata){
      
      console.log(keydata);
      var deleteMovie = new Firebase("https://movie-application.firebaseio.com/movies/" + keydata);
       deleteMovie.remove();
        console.log("Deleted");
    //   addViewed(datakey);
  };
    });