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
    board: board
  }

})();


const game = (() => {
  let currentPlayer = 'player-x';
  
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
          alert('This tile is taken')
          return
        }

    if (currentPlayer === 'player-x') {
      // let playerOne = [];
      // playerOne.push(index);
      // console.log(playerOne);
      gameBoard.board[index] = 'x';
      e.target.classList.add('player-x');
      currentPlayer = 'player-o';
    } else {
      gameBoard.board[index] = 'o';
      e.target.classList.add('player-o');
      currentPlayer = 'player-x'
    }

    console.log(gameBoard.board);
    console.log(gameBoard.board[index]);

    

    checkIfOver();
    
  }

  function checkIfOver() {
    // Check if tie
    

    // console.log(gameBoard.board.match('/^[0-9]+$/'));
    console.log(!gameBoard.board.some(isNaN));


    // if (gameBoard.board[0] == 'x' && gameBoard.board[1] == 'x' && gameBoard.board[2] == 'x') {
    //   console.log('Player 1 wins');
    // }
  }



  return {
    initGame
  }

})();


gameBoard.initBoard();
game.initGame();