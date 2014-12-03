;(function(db){
  'use strict';
  db.game = new Firebase('https://bcd-tictactoe.firebaseio.com');

  db.joinGame = db.game.child('join-game');
  db.playerOne = db.game.child('playerOne');
  db.playerTwo = db.game.child('playerTwo');
})(db = window.firebase || {});
