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
    // board: board,
    // player: currentPlayer
  }

})();

gameBoard.initBoard();


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

  // Event Functions
  function placeMarker(e) {
    if (e.target.classList.contains('player-x') ||
        e.target.classList.contains('player-o')) {
          alert('This tile is taken')
          return
        }

    if (currentPlayer === 'player-x') {
      e.target.classList.add('player-x');
      currentPlayer = 'player-o';
    } else {
      e.target.classList.add('player-o');
      currentPlayer = 'player-x'
    }
  }

  return {
    initGame
  }

})();

game.initGame();