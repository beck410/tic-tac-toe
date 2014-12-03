;(function(c,$,db,game){
  /*global describe it */  
  'use strict';

    c.startGame =function (){
      db.playerOne.once('value',function(ref){
        var playerOneStatus = ref.val();
        playerOneStatus !== true ? playerOne():playerTwo();
      }); 
    };

  function playerOne(){
    db.playerOne.set(true);
    game.gameTurn = true;
    console.log('playerOne set');
    console.log(game.gameTurn);
  }

  function playerTwo(){
    db.playerTwo.set(true);
    game.gameTurn = false;
    console.log('playerTwo Set');
    console.log(game.gameTurn)
  }

})(controller = window.controller || {}, jQuery, db,game);

