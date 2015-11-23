var TicTacBoom = (function() {
  var app = {};
  var player = 'X';
  
  function _updateBoard ( event ) {
    event.srcElement.innerHTML = player;
    player = player === 'X' ? 'O' : 'X';
  }
  
  function _isWinner (a0, a1, a2) {
    return a0 === a1 && a1 === a2;
  }
  
  function _winningRow(/**/) {
    // return _isWinner (a0, a1, a2);
  }
  
  function _winningColumn(/**/) {
    // return _isWinner (a0, a1, a2);
  }
  
  function _winningDiagonal(/**/) {
    // return _isWinner (a0, a1, a2);
  }
  
  function _checkForWin (event) {
    var row = event.srcElement.dataset.x;
    var column = event.srcElement.dataset.y;
    console.warn('row ::: ' , row);
    console.warn('column ::: ' , column);
    
    if(_winningRow()) {
      _boom();
    } else if(_winningColumn()) {
      _boom();
    } else if(_winningDiagonal()) {
      _boom();
    }
  }
  
  function _boom() {
    alert('BOOM! You won!');
    // disable board
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
