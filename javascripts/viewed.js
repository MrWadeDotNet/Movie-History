    // IF USER DOES NOT REFRESH PAGE AFTER ADDING SONG AND IMMEDIATELY SELECTS "WATCHED" A NEW KEY IS CREATED WITH VALUE "WATCHED: TRUE" AND MOVIE KEY IS ALSO SET "WATCHED:TRUE"

define(function(keydata){
	return function(keydata){
      
      console.log(keydata);
      var firebaseUpdate = new Firebase("https://movie-application.firebaseio.com/movies/" + keydata);
       firebaseUpdate.child("watched").set(true);
        console.log("Updated");
    //   addViewed(datakey);
  };
		});