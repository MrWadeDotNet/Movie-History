define(function(){
  return function(data){
    console.log(data);
    require(['hbs!../templates/actors'], function(popActors){
      $('.actor-container').html(popActors(data));
    });
  };
});