var TicTacBoom = (function() {
  var app = {};
  var player = 'X';
  var board = document.getElementById("board");
  
  function _updateBoard ( event ) {
    if(event.srcElement.innerHTML) { return; }
    
    event.srcElement.innerHTML = player;
    player = player === 'X' ? 'O' : 'X';
  }
  
  function _isWinner (a0, a1, a2) {
    return a0 && a1 && a2 && a0 === a1 && a1 === a2;
  }
  
  function _getValue(row, col) {
    return $('tr').eq(row).children()[col].innerHTML;
  }
  
  function _winningRow(row) {
    return _isWinner( _getValue(row, 0), _getValue(row, 1), _getValue(row, 2));
  }
  
  function _winningColumn(col) {
    return _isWinner( _getValue(0, col), _getValue(1, col), _getValue(2, col));
  }
  
  function _winningDiagonal(row, col) {
    if (_isWinner( _getValue(0, 0), _getValue(1, 1), _getValue(2, 2))) {
      return true;
    } else if (_isWinner( _getValue(0, 2), _getValue(1, 1), _getValue(2, 0))) {
      return true;   
    } else {
      return false;
    }
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
