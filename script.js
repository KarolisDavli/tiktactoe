const start = document.getElementById('start');
let gameOn = false;
let currentPlayer = 'player-x';

start.addEventListener("click", function() {
  // Start button
  if (gameOn == false) {
    gameBoard.initBoard();
    game.initGame();
    gameOn = true;
  } else {
    alert('Game already started');
  }
});

const gameBoard = (() => {
  let board = [];

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

  function resetBoard() {
    currentPlayer = 'player-x'
    const tiles = document.querySelectorAll('.single-tile');
    tiles.forEach(el => {  
      el.remove();
    })
    for (i = 0; i < 9; i++) {
      board.pop(i);
    }
    initBoard();
    game.initGame();
  }

  return {
    initBoard,
    board,
    renderEmptyBoard,
    resetBoard
  }
})();

const game = (() => {

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

    } else {
      gameBoard.board[index] = 'o';
      e.target.classList.add('player-o');
      currentPlayer = 'player-x';
    }

    checkIfOver(gameBoard.board);
    checkIfTie();
  }

  function checkIfTie() {
    let tie = gameBoard.board.every(i => (typeof i === 'string'));
    if (tie == true) {
      setTimeout(function() {
        alert('Tie, no one wins');
      }, 200);
      gameBoard.resetBoard();
    }
  }

  function checkIfOver(board) {
    if (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
      playerXWin();
    } else if (board[3] =='x' && board[4] == 'x' && board[5] == 'x') {
      playerXWin();
    } else if (board[6] == 'x' && board[7] == 'x' && board[8] == 'x') {
      playerXWin();
    } else if (board[0] == 'x' && board[3] == 'x' && board[6] == 'x') {
      playerXWin();
    } else if (board[1] == 'x' && board[4] == 'x' && board[7] == 'x') {
      playerXWin();
    } else if (board[2] == 'x' && board[5] == 'x' && board[8] == 'x') {
      playerXWin();
    } else if (board[0] == 'x' && board[4] == 'x' && board[8] == 'x') {
      playerXWin();
    } else if (board[0] == 'x' && board[4] == 'x' && board[6] == 'x') {
      playerXWin();
    } else if (board[2] == 'x' && board[4] == 'x' && board[6] == 'x') {
      playerXWin();
    }  
    // Check player o
      else if (board[0] == 'o' && board[1] == 'o' && board[2] == 'o') {
        playerOWin();
      } else if (board[3] =='o' && board[4] == 'o' && board[5] == 'o') {
        playerOWin();
      } else if (board[6] == 'o' && board[7] == 'o' && board[8] == 'o') {
        playerOWin();
      } else if (board[0] == 'o' && board[3] == 'o' && board[6] == 'o') {
        playerOWin();
      } else if (board[1] == 'o' && board[4] == 'o' && board[7] == 'o') {
        playerOWin();
      } else if (board[2] == 'o' && board[5] == 'o' && board[8] == 'o') {
        playerOWin();
      } else if (board[0] == 'o' && board[4] == 'o' && board[8] == 'o') {
        playerOWin();
      } else if (board[0] == 'o' && board[4] == 'o' && board[6] == 'o') {
        playerOWin();
      } else if (board[2] == 'o' && board[4] == 'o' && board[6] == 'o') {
        playerOWin();
      }
   }

   function playerXWin() {
    setTimeout(function() {
      alert('Game over, player x won')
      gameBoard.resetBoard();
    }, 200)
   }

   function playerOWin() {
    setTimeout(function() {
      alert('Game over, player o won')
      gameBoard.resetBoard();
    }, 200)
   }

  return {
    initGame
  }
})();

