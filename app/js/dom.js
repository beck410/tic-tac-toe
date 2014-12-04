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

