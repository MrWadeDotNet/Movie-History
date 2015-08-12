define(function(){
  return function(){
      var userInput = $('#inputTitle').val();
      console.log(userInput);
      $.ajax({
        url:"http://www.omdbapi.com/?t=" + userInput,
        method: "GET"
      }).done(function(data){
        data.userRating = 0;
        data.poster = "http://img.omdbapi.com/?i=" + data.imdbID + "&apikey=8513e0a1";
  //      data.watched = false;
        console.log(data);
        $.ajax({
          url: "https://movie-application.firebaseio.com/movies.json",
          method: "POST",
          data: JSON.stringify(data)
        }).done(function(){
          console.log("loaded to firebase");
        });
      });
    };
});

//Need to add check for failure. On Failure return "Movie Not Found"