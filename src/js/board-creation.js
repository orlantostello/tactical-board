const board = document.querySelector('#board');
const SQUARES_NUMBER = 736;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square', 'placeholder');
  // square.classList.add('placeholder');

  board.append(square);
}

// const squaretest = document.querySelector('.square');
