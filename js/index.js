//all variables
let points = document.querySelector('.points');
let choices = document.querySelector('.choices');
let buttons = document.querySelector('.buttons');
let map = { 1: 'rock', 2: 'paper', 3: 'scissor' };
//points variables
let allPoints = points.children;
let playerPoints = allPoints[0].querySelector('.playerPoints');
let computerPoints = allPoints[1].querySelector('.computerPoints');
//choice variables
allChoices = choices.children;
let playerChoiceImg = allChoices[0].firstElementChild;
let computerChoiceImg = allChoices[1].firstElementChild;
playerChoiceImg.src = './images/rock.png';
computerChoiceImg.src = './images/rock.png';
//buttons variables
let rockBtn = buttons.querySelector('.rock');
let paperBtn = buttons.querySelector('.paper');
let scissorBtn = buttons.querySelector('.scissor');
// handling events
rockBtn.addEventListener('click', () => {
    let myInterval = setInterval(() => {
        playerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
        computerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
    }, 200);
    setTimeout(() => {
        clearInterval(myInterval);
        playerChoiceImg.src = "./images/" + map[1] + ".png";
        // console.log("clicked rock");
        let cChoice = compChoice();
        isWinner('rock', cChoice);
    }, 3000);
});
paperBtn.addEventListener('click', () => {
    let myInterval = setInterval(() => {
        playerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
        computerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
    }, 200);
    setTimeout(() => {
        clearInterval(myInterval);
        playerChoiceImg.src = "./images/" + map[2] + ".png";
        // console.log("clicked paper");
        let cChoice = compChoice();
        isWinner('paper', cChoice);
    }, 3000);
});
scissorBtn.addEventListener('click', () => {
    let myInterval = setInterval(() => {
        playerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
        computerChoiceImg.src = "./images/" + map[Math.floor(Math.random() * 3 + 1)] + ".png";
    }, 200);
    setTimeout(() => {
        clearInterval(myInterval);
        playerChoiceImg.src = "./images/" + map[3] + ".png";
        // console.log("clicked scissor");
        let cChoice = compChoice();
        isWinner('scissor', cChoice);
    }, 3000);
});

function compChoice() {
    let random = Math.floor(Math.random() * 3 + 1);
    let choice = map[random];
    computerChoiceImg.src = './images/' + choice + ".png";
    return choice;
}

let playerScore = 0, computerScore = 0;
function isWinner(pChoice, cChoice) {
    // console.log(pChoice, cChoice);
    if (pChoice === 'rock' && cChoice === 'scissor') {
        playerScore++;
    } else if (pChoice === 'paper' && cChoice === 'rock') {
        playerScore++;
    } else if (pChoice === 'scissor' && cChoice === 'paper') {
        playerScore++;
    } else if (pChoice === cChoice) {/*do nothing*/ }
    else {
        computerScore++;
    }
    // Whoever wins 3 rounds, game resets!
    if (playerScore >= 3) {
        alert("You Won!");
        playerScore = 0; computerScore = 0;
    } else if (computerScore >= 3) {
        alert("You lost =(, Computer Won!");
        playerScore = 0; computerScore = 0;
    }
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;
}