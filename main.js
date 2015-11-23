var TicTacBoom = (function() {
  var app = {};
  var player = 'X';
  
  function _isWinner (a0, a1, a2) {
    return a0 === a1 && a1 === a2;
  }
  
  function _updateBoard ( event ) {
    event.srcElement.innerHTML = player;
    
    player = player === 'X' ? 'O' : 'X';
  }
  
  function _checkForWin (event) {
    console.warn('x ::: ' , event.srcElement.dataset.x);
    console.warn('y ::: ' , event.srcElement.dataset.y);
    // xCor, yCor
  
      // _getRowValues
      // _isWinner(a0, a1, a2)
      
      // _getColumnValues
      // _isWinner(a0, a1, a2)
      
      //_getDiagonalValues (if applilcable)
      // _isWinner(a0, a1, a2)
  }
  
  function _playGame (event) {
    _updateBoard(event);
    _checkForWin(event);
  } 
  
  app.startGame = function(){
    var board = document.getElementById("board");
    board.onclick = _playGame;
  };
  
  return app;
  
})();

TicTacBoom.startGame();
