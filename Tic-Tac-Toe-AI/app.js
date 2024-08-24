// Cache DOM elements
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

// Game variables
let turnO = true;
let count = 0;

let score = {
    "X": 1,
    "O": -1,
    "Tie": 0
};

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game state
const resetGame = () => {
    turnO = true;
    count = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
};

// Display draw message
const displayMessage = (text) => {
    msg.innerText = text;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");
};

// Check for a winner
const checkWinner = () => {
    for(let val of winningPattern) {
        let pos0val = boxes[val[0]].innerText;
        let pos1val = boxes[val[1]].innerText;
        let pos2val = boxes[val[2]].innerText;

        if(pos0val && pos0val === pos1val && pos1val === pos2val) {
            return pos0val;
        }
    }
    return null;
};

// Handle box click
const handleBoxClick = (e) => {
    let box = e.target;
    if (turnO && !box.innerText) {
        box.innerText = "O";
        box.style.color = "#A3B18A";
        box.disabled = true;
        count++;
        turnO = false;
        playGame();
    }
};

// Set up event listeners for boxes
function setupListeners() {
    boxes.forEach((box) => {
        box.addEventListener("click", handleBoxClick);
    });
};

// Computer's move
function computerPlayer() {
    if (turnO) return;

    const availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
    if (availableBoxes.length === 0) return;

    if (count === 1) {
        // First move preference
        const center = boxes[4];
        if (!center.innerText) {
            center.innerText = "X";
            center.style.color = "#588157";
            center.disabled = true;
            count++;
            turnO = true;
            playGame();
            return;
        }

        // Pick a corner if center is occupied
        const corners = [0, 2, 6, 8];
        const bestCorner = corners.find(index => !boxes[index].innerText);
        if (bestCorner !== undefined) {
            boxes[bestCorner].innerText = "X";
            boxes[bestCorner].style.color = "#588157";
            boxes[bestCorner].disabled = true;
            count++;
            turnO = true;
            playGame();
            return;
        }
    }

    // Minimax algorithm for best move
    let bestScore = -Infinity;
    let bestMove;

    availableBoxes.forEach((box, index) => {
        box.innerText = "X";
        box.disabled = true;
        count++;

        const score = minimax(0, false);

        // console.log(`Move: ${index}, Score: ${score}`);

        box.innerText = "";
        box.disabled = false;
        count--;

        if (score > bestScore) {
            bestScore = score;
            bestMove = box;
        }
    });

    // Ensure bestMove is defined before proceeding
    if (bestMove) {
        bestMove.innerText = "X";
        bestMove.style.color = "#588157";
        bestMove.disabled = true;
        count++;
        turnO = true;
        playGame();
    }
};

// Minimax algorithm for computer's move
function minimax(depth, isMaximizing) {
    let winner = checkWinner();
    if (winner) return score[winner] - depth; // Adjusted for quicker wins or delayed losses
    if (count === 9) return score.Tie;

    let bestScore = isMaximizing ? -Infinity : Infinity;

    Array.from(boxes).forEach((box) => {
        if (box.innerText === "") {
            box.innerText = isMaximizing ? "X" : "O";
            box.disabled = true;
            count++;

            const score = minimax(depth + 1, !isMaximizing);

            box.innerText = "";
            box.disabled = false;
            count--;

            if (isMaximizing) {
                bestScore = Math.max(score, bestScore);
            } else {
                bestScore = Math.min(score, bestScore);
            }
        }
    });
    return bestScore;
};

// Main game logic
function playGame() {
    const winner = checkWinner();
    if (winner) {
        displayMessage(`Congratulations, Winner is ${winner}`);
    } else if (count === 9) {
        displayMessage("It's a Draw");
    } else if (!turnO) {
        computerPlayer();
    }
};

// Initialize the game
setupListeners();
resetGame();

// Set up event listeners for buttons
resetBtn.addEventListener("click", resetGame);

newGameBtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");
    resetBtn.classList.remove("hide");
    resetGame();
});
