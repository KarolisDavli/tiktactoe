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
    board,
    renderEmptyBoard
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

    console.log(typeof gameBoard.board);

    checkIfOver(gameBoard.board);
    checkIfTie(moveCount);
    
  }

  let arrBoard = Object.keys(gameBoard.board);

  // function checkIfTie(count) {
  //   if (count == 9) {
  //     setTimeout(function() {
  //       alert('Game is tie, no one wins');
  //     }, 200);
  //   }
  // }
  
  function checkIfTie() {
    console.log(gameBoard.board.every(i => (typeof i === 'string')));
    // console.log(gameBoard.board.includes(Number));
    // console.log(typeof gameBoard.board[1]);
    if (gameBoard.board.every(i => (typeof i === 'string')) == true) {
      alert('Tie');
    }
  }

  // function checkIfOver(board) {
  //  if (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
  //    setTimeout(function() {
  //      alert('Game over, player x won')
  //    }, 200)
  //  } else {
  //    console.log('no winner yet');
  //  }
  // }

  function checkIfOver(board) {
    if (board[0] == 'x' && board[1] == 'x' && board[2] == 'x') {
      setTimeout(function() {
        alert('Game over, player x won')
      }, 200)
    } else if (board[0] == 'o' && board[1] == 'o' && board[2] == 'o') {
      setTimeout(function() {
        alert('Game over, player o won')
      }, 200)
    }
   }



  return {
    initGame
  }

})();


gameBoard.initBoard();
game.initGame();