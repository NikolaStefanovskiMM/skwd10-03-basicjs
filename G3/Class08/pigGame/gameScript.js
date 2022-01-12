/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GOLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*

        WHAT WE NEED 

        First we take all the elements that we need and use thru the game
        We should decide on witch elements we will have event listener -> Roll dice, New game, Hold
        We need a roll dice function
        We need a new game function
        We need a hold function
        Something that will switch players
        We need valiable for saving scores for player one and player two and round score
        When we get to 100 to say whitch player is winner

*/

// INITIAL VALUES
const gameWinningScore = 10;
let playerOneScore = 0;
let playerTwoScore = 0;
let currentScore = 0;

let isGameOn = false;
let activePlayer = 0;


let newGameButton = document.querySelector(".btn-new");
let rollButton = document.querySelector(".btn-roll");
let holdButton = document.querySelector(".btn-hold");
let playerOneCurrentScoreElement = document.getElementById("current-0");
let playerTwoCurrentScoreElement = document.getElementById("current-1");
let playerOneTotalScoreElement = document.getElementById("score-0");
let playerTwoTotalScoreElement = document.getElementById("score-1");


function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    currentScore = 0;
    activePlayer = 0;
    isGameOn = true;

    playerOneCurrentScoreElement.innerText = currentScore;
    playerTwoCurrentScoreElement.innerText = currentScore;
    playerOneTotalScoreElement.innerText = playerOneScore;
    playerTwoTotalScoreElement.innerText = playerTwoScore;
}

function rollDice() {

    if (!isGameOn) {
        return;
    }
    
    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".dice").src = "./dice/dice-" + diceOne + ".png";
    document.querySelector(".dice2").src = `./dice/dice-${diceTwo}.png`;

    if (diceOne !== 1 && diceTwo !== 1) {
        currentScore += diceOne + diceTwo;
        
        if (activePlayer === 0) {
            playerOneCurrentScoreElement.innerText = currentScore;
        } else {
            playerTwoCurrentScoreElement.innerText = currentScore;
        }
    } else {
        nextPlayer();
    }
}

function holdCurrentScore() {
    
    if (!isGameOn) {
        return;
    }

    if (activePlayer === 0) {
        playerOneScore += currentScore;
        playerOneTotalScoreElement.innerText = playerOneScore;
        nextPlayer();
    } else {
        playerTwoScore += currentScore;
        playerTwoTotalScoreElement.innerText = playerTwoScore;
        nextPlayer();
    }
    checkForWinner();
}

function nextPlayer() {
    currentScore = 0;

    if (activePlayer === 0) {
        playerOneCurrentScoreElement.innerText = currentScore;
    } else {
        playerTwoCurrentScoreElement.innerText = currentScore;
    }

    document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
    //activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    document.querySelector(`.player-${activePlayer}-panel`).classList.add("active");
}

function checkForWinner() {
    if (playerOneScore >= gameWinningScore) {
        isGameOn = false;
        alert("Player 1 is the Winner");
    } else if (playerTwoScore >= gameWinningScore) {
        isGameOn = false;
        alert("Player 2 is the Winner");
    }
}

// EVENTS
newGameButton.addEventListener('click', newGame);

rollButton.addEventListener('click', function () {
    rollDice();
});

holdButton.addEventListener('click', function () {
    holdCurrentScore(); 
});
