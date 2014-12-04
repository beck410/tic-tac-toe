;(function(c,$,db,game){
  /*global describe it */
  'use strict';
  c.initialize = game.initialize;
  c.boardAlive = game.boardAlive;

})(controller = window.controller || {}, jQuery, db,game);

;(function(dom, $, c, game){
  'use strict';
  $().ready(function(){
    //click event for join game   
    $('#join-game').click(function(){
      c.initialize();
    });

    dom.boardAlive = 'penny';

  });
})(dom = window.dom || {},jQuery,controller, game);


;(function(db){
  'use strict';
    db.game = new Firebase('https://bcd-tictactoe.firebaseio.com');

    db.joinGame = db.game.child('join-game');
    db.playerOne = db.game.child('playerOne');
    db.playerTwo = db.game.child('playerTwo');
    db.players = db.game.child('players');
})(db = window.firebase || {});

;(function(game,db, $){
  var turnCounter = true;
  game.initialBoard = '/////////'; 
  var playerPiece;
  var playerNumber;

  function playerOne(){
    db.playerOne.set(true);
    turnCounter = true;
    playerPiece = 'x';
    db.joinGame.set(1);
    $('#player-one').show('slow');
    $('#waiting').show('slow');
    $('#join-game').hide('slow');
    }

  function playerTwo(){
    db.playerTwo.set(true);
    turnCounter = false;
    playerPiece = 'o';
    db.joinGame.set(2);
    $('#player-two').show('slow');
    $('#join-game').hide('slow');
    $('#player-one-turn').show('slow');
  }

  function turn(){
    if(playerPiece === 'o'){
      console.log('turn');
    }
  }

  //public functions

  function isTwoPlayers(){
    db.joinGame.on('value',function(ref){
      playerNumber = ref.val();
      if(playerNumber === 2){
        $('#waiting').hide('slow');
        $('#player-one-turn').show('slow');
        turn();
      } 
    });
  };

  function setPlayers(){
    db.playerOne.once('value',function(ref){
      playerOneStatus = ref.val();
      if(playerOneStatus !== true){
        playerOne();
      } else {
        playerTwo();
      }
    });
  }

  game.initialize = function(){
    setPlayers();
    isTwoPlayers();
  }

})(game = window.game || {},db, jQuery);


