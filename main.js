let boxes = document.querySelectorAll('.box');
let turn = document.querySelector('.turn');
let popup = document.querySelector('.popup');
let winner = document.querySelector('.winner');
let restart = document.querySelector('.restart');
let restarter = document.querySelector('.restarter');

let player = 0;

boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    if (box.innerHTML === '') {
      if (player % 2 === 0) {
        box.innerHTML = 'X';
        turn.innerHTML = 'TURN OF O';
      } else {
        box.innerHTML = 'O';
        turn.innerHTML = 'TURN OF X';
      }
      player++;
    }

    // Check win conditions
    if (
      (boxes[0].innerHTML === 'X' && boxes[1].innerHTML === 'X' && boxes[2].innerHTML === 'X') ||
      (boxes[3].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[5].innerHTML === 'X') ||
      (boxes[6].innerHTML === 'X' && boxes[7].innerHTML === 'X' && boxes[8].innerHTML === 'X') ||
      (boxes[0].innerHTML === 'X' && boxes[3].innerHTML === 'X' && boxes[6].innerHTML === 'X') ||
      (boxes[1].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[7].innerHTML === 'X') ||
      (boxes[2].innerHTML === 'X' && boxes[5].innerHTML === 'X' && boxes[8].innerHTML === 'X') ||
      (boxes[0].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[8].innerHTML === 'X') ||
      (boxes[2].innerHTML === 'X' && boxes[4].innerHTML === 'X' && boxes[6].innerHTML === 'X')
    ) {
      popup.style.display = 'flex';
      winner.innerHTML = 'X WINS';
      restart.innerHTML = 'TAP ANYWHERE TO RESTART THE GAME';
      document.body.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
      restarter.style.display = 'block';
      restarter.addEventListener('click', () => {
        restarter.style.display = 'none';
        player = 0;
        popup.style.display = 'none';
        document.body.style.gridTemplateRows = '1fr 1fr 1fr';
        boxes.forEach((box) => {
          box.innerHTML = '';
        });
      })
    } else if (
      (boxes[0].innerHTML === 'O' && boxes[1].innerHTML === 'O' && boxes[2].innerHTML === 'O') ||
      (boxes[3].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[5].innerHTML === 'O') ||
      (boxes[6].innerHTML === 'O' && boxes[7].innerHTML === 'O' && boxes[8].innerHTML === 'O') ||
      (boxes[0].innerHTML === 'O' && boxes[3].innerHTML === 'O' && boxes[6].innerHTML === 'O') ||
      (boxes[1].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[7].innerHTML === 'O') ||
      (boxes[2].innerHTML === 'O' && boxes[5].innerHTML === 'O' && boxes[8].innerHTML === 'O') ||
      (boxes[0].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[8].innerHTML === 'O') ||
      (boxes[2].innerHTML === 'O' && boxes[4].innerHTML === 'O' && boxes[6].innerHTML === 'O')
    ) {
      popup.style.display = 'flex';
      winner.innerHTML = 'O WINS';
      restart.innerHTML = 'TAP ANYWHERE TO RESTART THE GAME';
      document.body.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
      restarter.style.display = 'block';
      restarter.addEventListener('click', () => {
        restarter.style.display = 'none';
        player = 0;
        popup.style.display = 'none';
        document.body.style.gridTemplateRows = '1fr 1fr 1fr';
        boxes.forEach((box) => {
          box.innerHTML = '';
        });
      })
    } else if (
      boxes[0].innerHTML !== '' &&
      boxes[1].innerHTML !== '' &&
      boxes[2].innerHTML !== '' &&
      boxes[3].innerHTML !== '' &&
      boxes[4].innerHTML !== '' &&
      boxes[5].innerHTML !== '' &&
      boxes[6].innerHTML !== '' &&
      boxes[7].innerHTML !== '' &&
      boxes[8].innerHTML !== ''
    ) {
      popup.style.display = 'flex';
      winner.innerHTML = 'DRAW';
      restart.innerHTML = 'TAP ANYWHERE TO RESTART THE GAME';
      document.body.style.gridTemplateRows = '1fr 1fr 1fr 1fr';
      restarter.style.display = 'block';
      restarter.addEventListener('click', () => {
        restarter.style.display = 'none';
        player = 0;
        popup.style.display = 'none';
        document.body.style.gridTemplateRows = '1fr 1fr 1fr';
        boxes.forEach((box) => {
          box.innerHTML = '';
        });
      })
    }
  });
});