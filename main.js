let boxes = document.querySelectorAll('.box');
let turn = document.querySelector('.turn');
let popup = document.querySelector('.popup');
let winner = document.querySelector('.winner');
let restart = document.querySelector('.restart');
let restarter = document.querySelector('.restarter');

let player = 0;

boxes.forEach(function(box) {
  box.addEventListener('click', function() {

    

  box.addEventListener('mouseenter', function() {
    if (box.innerHTML === '' && !popup.style.display) {
      box.innerHTML = (player % 2 === 0) ? 'X' : 'O';
    }
  });
  
  box.addEventListener('mouseleave', function() {
    if (box.innerHTML === 'X' && !popup.style.display) {
      box.innerHTML = '';
    }
  });
  


    if (box.innerHTML === '') {
      box.innerHTML = (player % 2 === 0) ? 'X' : 'O';
      turn.innerHTML = (player % 2 === 0) ? 'TURN OF O' : 'TURN OF X';
      player++;

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
      }
    }
  });
});

restarter.addEventListener('click', () => {
  restarter.style.display = 'none';
  player = 0;
  popup.style.display = 'none';
  document.body.style.gridTemplateRows = '1fr 1fr 1fr';
  boxes.forEach((box) => {
    box.innerHTML = '';
  });
});
