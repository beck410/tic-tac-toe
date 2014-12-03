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


;(function(dom, $,db, game, c){
  'use strict';
  $().ready(function(){
    //click event for join game   
    $('#join-game').click(function(){
      //db.joinGame.set(0);
      c.startGame();
    });
  });
})(dom = window.dom || {},jQuery,db,game,controller);


;(function(db){
  'use strict';
    db.game = new Firebase('https://bcd-tictactoe.firebaseio.com');

    db.joinGame = db.game.child('join-game');
    db.playerOne = db.game.child('playerOne');
    db.playerTwo = db.game.child('playerTwo');
    db.players = db.game.child('players');
})(db = window.firebase || {});

;(function(game){
  var turnCounter = true;
  game.initialBoard = [['','',''],['','',''],['','','']];  
  
  game.gameTurn = turnCounter;
})(game = window.game || {});

