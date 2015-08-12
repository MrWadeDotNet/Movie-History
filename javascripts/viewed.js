
define(function(keydata){
	return function(keydata){
      
      console.log(keydata);
      var firebaseUpdate = new Firebase("https://movie-application.firebaseio.com/movies/" + keydata);
       firebaseUpdate.child("watched").set("true");
        console.log("Updated");
    //   addViewed(datakey);
  };
		});