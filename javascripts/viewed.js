    // IF USER DOES NOT REFRESH PAGE AFTER ADDING SONG AND IMMEDIATELY SELECTS "WATCHED" A NEW KEY IS CREATED WITH VALUE "WATCHED: TRUE" AND MOVIE KEY IS ALSO SET "WATCHED:TRUE"

define(function() {
	return function(datakey) {
 	     var firebaseUpdate = new Firebase("https://movie-application.firebaseio.com/movies/" + datakey);
 	     firebaseUpdate.child("watched").set(true);
	      console.log("Updated");
 		        };
		});