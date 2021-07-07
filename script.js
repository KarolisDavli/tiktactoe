const gameBoard = (() => {
  const board = [];

  function initBoard() {
    renderEmptyBoard();
    render();
  }

  function renderEmptyBoard() {
    for (i = 0; i < 9; i++) {
      board.push(i);
    }
  }

  function render() {
    const tiles = document.querySelector('.tiles');
    board.forEach(el => {
      let tile = document.createElement('div');
      tile.classList.add('single-tile');
      tile.dataset.number = el;
      tiles.appendChild(tile);
    })
  }

  return {
    initBoard,
    board
  }
  
})();


const game = (() => {
  let currentPlayer = 'player-x';
  let moveCount = 0;

  
  function initGame() {
    bindEvents();
  }

  function bindEvents() {
    const tileButtons = document.querySelectorAll('.single-tile');
    tileButtons.forEach(button => {
      button.addEventListener('click', placeMarker);
    })
  }

  function placeMarker(e) {
    const index = e.target.dataset.number;

    if (e.target.classList.contains('player-x') ||
        e.target.classList.contains('player-o')) {
          alert('This tile is taken');
          return
        }

    if (currentPlayer === 'player-x') {
      gameBoard.board[index] = 'x';
      e.target.classList.add('player-x');
      currentPlayer = 'player-o';
      moveCount++;

    } else {
      gameBoard.board[index] = 'o';
      e.target.classList.add('player-o');
      currentPlayer = 'player-x';
      moveCount++;
    }
    console.log(moveCount);
    console.log(gameBoard.board);


    checkIfOver(gameBoard.board);
    checkIfTie(moveCount);
    
  }

  function checkIfTie(count) {
    if (count == 9) {
      setTimeout(function() {
        alert('Game is tie, no one wins');
      }, 200);
    }
  }

  function checkIfOver(board) {
   if (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
     setTimeout(function() {
       alert('Game over, player x won')
     }, 200)
   } else {
     console.log('no winner yet');
   }
  }

  return {
    initGame
  }

})();


gameBoard.initBoard();
game.initGame();