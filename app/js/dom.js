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

