define(function(){
  return function(data){
    console.log(data);
    require(['hbs!../templates/listmovies'], function(moviesTemplate){
      $('.movie_container').html(moviesTemplate(data));
    });
  };
});