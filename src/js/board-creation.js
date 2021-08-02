const board = document.querySelector('#board');
// const SQUARES_NUMBER = 736;
const SQUARES_NUMBER = 468;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  // square.classList.add('square', 'placeholder');
  // square.classList.add('placeholder');
  square.classList.add('square', 'dropZone');
  square.setAttribute('data-zone', `${4 + i}`);

  board.append(square);
  // console.log(square.attributes);
}

// const squaretest = document.querySelector('.square');
