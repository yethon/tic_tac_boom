var TicTacBoom = (function() {
  var app = {};
  var player = 'X';
  var board = document.getElementById("board");
  
  function _updateBoard ( event ) {
    event.srcElement.innerHTML = player;
    player = player === 'X' ? 'O' : 'X';
  }
  
  function _isWinner (a0, a1, a2) {
    return a0 === a1 && a1 === a2;
  }
  
  // dry this out
  function _winningRow(row) {
    var first = $('tr').eq(row).children()[0].innerHTML;
    var second = $('tr').eq(row).children()[1].innerHTML;
    var third = $('tr').eq(row).children()[2].innerHTML;
    
    return _isWinner(first, second, third);
  }
  
  // dry this out
  function _winningColumn(col) {
    var first = $('tr').eq(0).children()[col].innerHTML;
    var second = $('tr').eq(1).children()[col].innerHTML;
    var third = $('tr').eq(2).children()[col].innerHTML;
    
    return _isWinner(first, second, third);
  }
  
  function _winningDiagonal(row, col) {
    col = parseInt(col);
    row = parseInt(row);
    
    if((col === 0 && row === 1) ||
       (col === 2 && row === 1) ||
       (col === 1 && row === 0) ||
       (col === 1 && row === 2)) { 
         return false; 
       }
       
    // check for diagonal
    
  }
  
  function _checkForWin (event) {
    var row = event.srcElement.dataset.x;
    var col = event.srcElement.dataset.y;
    
    if(_winningRow(row)) {
      _boom();
    } else if(_winningColumn(col)) {
      _boom();
    } else if(_winningDiagonal(row, col)) {
      _boom();
    }
  }
  
  function _boom() {
    alert('BOOM! You won!');
    _finishGame();
  }
  
  function _playGame (event) {
    _updateBoard(event);
    _checkForWin(event);
  } 
  
  function _finishGame() {
    board.onclick = null;
  }
  
  app.startGame = function(){
    board.onclick = _playGame;
  };
  
  return app;
  
})();

TicTacBoom.startGame();
