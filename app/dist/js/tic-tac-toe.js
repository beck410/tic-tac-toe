;(function(){
  'use strict';
})();


;(function(dom, $,fb){
  //click event for join game   
  $('#join-game').click(function(){
    //fb.joinGame.set(0);
    
    var playerJoin = fb.joinGame.on("value", function(snapshot){
      console.log(snapshot.val());
      if(snapshot.val() === 2){
        $('#join-game').hide('slow');
      }
      return snapshot.val();
    });
    
     playerJoin === 0 ? playerOne():playerTwo(); 

  });

  function playerOne() {
    fb.joinGame.set(1);
    fb.playerOne.set('x'); 
  }

  function playerTwo(){
    fb.joinGame.set(2);
    fb.playerTwo.set('o');
}
  
})(dom = window.dom || {},jQuery,firebase);


;(function(firebase){
  'use strict';
  firebase.joinGame = new Firebase('https://bcd-tictactoe.firebaseio.com/join-game');
})(firebase = window.firebase || {});



;(function(gamePlay){
  gamePlay.initialBoard = [['','',''],['','',''],['','','']];  
})(gamePlay = window.gamePlay || {});

