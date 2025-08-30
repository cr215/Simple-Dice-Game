// --- STATE VARIABLES ---
let player1Score = 0;
let player2Score = 0;

// --- DOM ELEMENT REFERENCES ---
const gameStatusEl = document.getElementById('game-status');
const player1ScoreEl = document.getElementById('player1-score');
const player2ScoreEl = document.getElementById('player2-score');
const player1DiceEl = document.querySelector(".img1");
const player2DiceEl = document.querySelector(".img2");
const rollButton = document.getElementById('roll-button');
const resetButton = document.getElementById('reset-button');

/**
 * Rolls the dice, determines the winner, and updates the score.
 */
function rollDice() {
    // 1. Generate random numbers
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    const randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

    // 2. Set the dice image sources based on the random numbers
    const randomImageSource1 = "image/dice" + randomNumber1 + ".png";
    const randomImageSource2 = "image/dice" + randomNumber2 + ".png";

    player1DiceEl.setAttribute("src", randomImageSource1);
    player2DiceEl.setAttribute("src", randomImageSource2);

    // 3. Determine the winner and update scores
    if (randomNumber1 > randomNumber2) {
        gameStatusEl.innerHTML = "🚩 Player 1 Wins!";
        player1Score++;
    } else if (randomNumber2 > randomNumber1) {
        gameStatusEl.innerHTML = "Player 2 Wins! 🚩";
        player2Score++;
    } else {
        gameStatusEl.innerHTML = "It's a Draw!";
    }

    // 4. Update the score display on the page
    updateScores();
}

/**
 * Resets the scores and the UI to the initial state.
 */
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScores();

    gameStatusEl.innerHTML = "Let's Play!";
    // Reset dice to a default state (e.g., dice6)
    player1DiceEl.setAttribute("src", "image/dice6.png");
    player2DiceEl.setAttribute("src", "image/dice6.png");
}

/**
 * Updates the score text content in the HTML.
 */
function updateScores() {
    player1ScoreEl.textContent = player1Score;
    player2ScoreEl.textContent = player2Score;
}

// --- EVENT LISTENERS ---
rollButton.addEventListener('click', rollDice);
resetButton.addEventListener('click', resetGame);
