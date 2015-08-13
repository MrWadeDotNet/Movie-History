define(function(keydata, userInput) {
  return function(keydata, userInput) {

    console.log(keydata);
    var firebaseUpdate = new Firebase("https://movie-application.firebaseio.com/movies/" + keydata);
    firebaseUpdate.child("userRating").set(userInput);
    console.log("Updated");
    //   addViewed(datakey);
  };
});