'use strict';
//Toggle buttons are interactive components that allow users to switch between two states, such as on/off or true/false. In JavaScript, creating a toggle button involves manipulating the Document Object Model (DOM) and handling events to reflect state changes in the user interface.

//use initial value score 43 and 24 from index.html

//use score id instead of class

//selecting element from index.html
const player0El = document.querySelector('.player--0'); //.player is class
const player1El = document.querySelector('.player--1'); //.player is class

const score0El = document.querySelector('#score--0'); //#use for Id and dot . use for classes. El for element
const score1El = document.getElementById('score--1'); //not use # because we not use selector, we write name of Id.
const current0El = document.getElementById('current--0'); //not use bcz we use Id#, work for player 1
const current1El = document.getElementById('current--1'); //not use bcz we use Id #, work for player 1

const diceEl = document.querySelector('.dice'); //remove dice from game, .Dice is class
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0; //score will zero on game
score1El.textContent = 0; //score will zero on game
diceEl.classList.add('hidden'); //dice of class is hidden check on console-element-index.html instead of dice alone.

const score = [0, 0]; //use array for score, in array player 1 is zero and player 2 is 1, here 0 , 0 mean 0 and 1

let currentScore = 0;
let activePlayer = 0;

let playing = true; //Beginning if make playing is true

const switchPlayer = function () {};

document.getElementById(`current--${activePlayer}`).textContent = 0; // By this if player 1  dice comes on zero.
//Then player 2 currentScore will start, and player 1 currentScore come to zero on pig game.
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0; //if activePlayer ===0 is false ,and player equal to 1 , then active player will be zero 0.it allows to switch from zero to one.
player0El.classList.toggle('player--active'); //switch colours on turn basis white or light  pink on pig game
player1El.classList.toggle('player--active'); //switch colours on turn basis white or light  pink on pig game

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //playing is Boolean value we don't need to check it and use equal
    //btnroll use click function
    //1.Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //Math.random give num from 0 to 1 times 6 give num from 1 to 5 add 1 give num from 1 to 6.
    // console.log(dice); //dice number appear on console aswell
    //2. Display dice
    diceEl.classList.remove('hidden'); //have remove hidden

    diceEl.src = `dice-${dice}.png`; //src is source, dice- img number, will show all images

    //3. checked for roller  1,if true switch to next player

    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player, clip 84
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // if (playing).This will execute for the code below.
    //When score reach to 20,winner will become dark, and not roll btn will execute.
    //1. Add score to active player's score

    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //score[1] =score[1] + currentScore
    //2. Check if player's score >=100// game will finish,you make it 20 aswell.
    if (score[activePlayer] >= 20) {
      //Finish the game
      playing = false; //End we use playing is false

      diceEl.classList.add('hidden'); //add dice hidden will show dice hidden at the end of the game.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); //add player winner. player winner class taken from style.css line 160.and winner will be black in colour.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); //remove player active to show winner player
    } else {
    }
  }
  //Switch to the next player
  switchPlayer();
});
