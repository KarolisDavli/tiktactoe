const player = (playerNumber, playerName) => {
  const sayHello = () => console.log(`Well hello there ${playerName}, 
  is your number ${playerNumber}?`);
  return {playerNumber, playerName, sayHello};
};



const gameFlow = (() => {

})();


const gameBoard = (() => {
  let board = [];

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
    console.log(tiles);
    board.forEach(el => {
      let tile = document.createElement('div');
      tile.innerText = el;
      tile.classList.add('single-tile');
      tiles.appendChild(tile);
    })
  }

  function bindEvents() {
    const tileButton = document.querySelectorAll('.single-tile');
    tileButton.forEach(button => {
      button.addEventListener('click', placeAMarker);
    })
  }

  // Event Functions
  function placeAMarker() {
    // let content = parseInt(this.innerText);
    // let index = board.indexOf(content);
    // console.log(index);



    this.innerText = 'x';
    // Switch player and mark after a move

  }
  
  return {init};
})();

gameBoard.init();