define(function(){
  return function(data){
    require(['hbs!../templates/listmovies'], function(moviesTemplate){
      $('.movie_container').html(moviesTemplate(data));
    });
  };
});