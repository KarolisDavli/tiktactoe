const player = (playerNumber, playerName) => {
  const sayHello = () => console.log(`Well hello there ${playerName}, 
  is your number ${playerNumber}?`);
  return {playerNumber, playerName, sayHello};
};


const gameFlow = (() => {

})();


const gameBoard = (() => {
  let board = [];
  let currentPlayer = 'player-x';

  function init() {
    renderEmptyBoard();
    render();
    bindEvents();
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

  function bindEvents() {
    const tileButton = document.querySelectorAll('.single-tile');
    tileButton.forEach(button => {
      button.addEventListener('click', placeMarker);
    })
  }

  // Event Functions
  function placeMarker(e) {
    let index = e.target.getAttribute('data-number');


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
      console.log(board[index]);
    }
  }
  


  return {init};
})();

gameBoard.init();