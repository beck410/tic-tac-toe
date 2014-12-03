;(function(c,$,db,game){
  'use strict';

  //checks for two people and sets up turns
  c.startGame = function(){ 
   db.playerOne.once('value',function(ref){
     var playerOneStatus = ref.val();

     playerOneStatus !== true ? playerOne():playerTwo();
   }); 
  };

  function playerOne(){
    db.playerOne.set(true);
    console.log('playerOne set');
  }

  function playerTwo(){
    db.playerTwo.set(true);
    game.gameTurn = false;
    console.log('playerTwo Set');
    console.log(game.gameTurn);
  }

})(controller = window.controller || {}, jQuery, db,game);

