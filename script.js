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
    console.log(index);
    console.log(gameBoard.board);
    console.log(gameBoard.board[index]);


    // Man reik sukeist, kad paspaudus ant tile pasikeistu ne tik jo
    // Klase, bet taip pat pats array butu pakoreguotas su x arba o
    // Tam tikroje array vietoje
    // Ir tada jau galima tikrinti laimetoja

    // Kazkodel neuzskaito pirmo kliko ir pakeicia array[index] tik jau
    // Pot kito veiksto

    if (e.target.classList.contains('player-x') ||
        e.target.classList.contains('player-o')) {
          alert('This tile is taken')
          return
        }

    if (currentPlayer === 'player-x') {
      gameBoard.board[index] = 'x';
      console.log(gameBoard.board[index]);
      e.target.classList.add('player-x');
      currentPlayer = 'player-o';
    } else {
      gameBoard.board[index] = 'o';
      e.target.classList.add('player-o');
      currentPlayer = 'player-x'
    }
  }

  function checkIfOver() {

  }



  return {
    initGame
  }

})();


gameBoard.initBoard();
game.initGame();