import { createPlayerBoardUI } from "./DOMController";
import { Ship } from "./Ship";
import { Player } from "./Player";

let mainWrapper;
let boardWrapper;

let human;
let computer;

let humanBoardUI;
let computerBoardUI;
let humanTurn = true;
let displayArea;

//initialisation of human board
function humanSetup() {
  let humanShip1;
  let humanShip2;
  let humanShip3;
  let humanShip4;
  let humanShip5;
  let humanShip1Position;
  let humanShip2Position;
  let humanShip3Position;
  let humanShip4Position;
  let humanShip5Position;
  let humanShip1Axis;
  let humanShip2Axis;
  let humanShip3Axis;
  let humanShip4Axis;
  let humanShip5Axis;

  humanShip1 = new Ship(3);
  humanShip2 = new Ship(5);
  humanShip3 = new Ship(4);
  humanShip4 = new Ship(3);
  humanShip5 = new Ship(2);
  humanShip1Position = human.gameboard.board[0][0];
  humanShip2Position = human.gameboard.board[3][3];
  humanShip3Position = human.gameboard.board[5][5];
  humanShip4Position = human.gameboard.board[7][6];
  humanShip5Position = human.gameboard.board[1][7];
  humanShip1Axis = 0;
  humanShip2Axis = 1;
  humanShip3Axis = 0;
  humanShip4Axis = 1;
  humanShip5Axis = 0;

  human.gameboard.placeShipAt(humanShip1, humanShip1Position, humanShip1Axis);
  human.gameboard.placeShipAt(humanShip2, humanShip2Position, humanShip2Axis);
  human.gameboard.placeShipAt(humanShip3, humanShip3Position, humanShip3Axis);
  human.gameboard.placeShipAt(humanShip4, humanShip4Position, humanShip4Axis);
  human.gameboard.placeShipAt(humanShip5, humanShip5Position, humanShip5Axis);
}

//initialisation of computer board
function computerSetup() {
  let computerShip1;
  let computerShip2;
  let computerShip3;
  let computerShip4;
  let computerShip5;

  let computerShip1Position;
  let computerShip2Position;
  let computerShip3Position;
  let computerShip4Position;
  let computerShip5Position;
  let computerShip1Axis;
  let computerShip2Axis;
  let computerShip3Axis;
  let computerShip4Axis;
  let computerShip5Axis;

  computerShip1 = new Ship(2);
  computerShip2 = new Ship(3);
  computerShip3 = new Ship(5);
  computerShip4 = new Ship(5);
  computerShip5 = new Ship(4);

  computerShip1Position = computer.gameboard.board[0][0];
  computerShip2Position = computer.gameboard.board[3][3];
  computerShip3Position = computer.gameboard.board[7][5];
  computerShip4Position = computer.gameboard.board[5][1];
  computerShip5Position = computer.gameboard.board[0][5];

  computerShip1Axis = 0;
  computerShip2Axis = 1;
  computerShip3Axis = 0;
  computerShip4Axis = 1;
  computerShip5Axis = 1;

  computer.gameboard.placeShipAt(
    computerShip1,
    computerShip1Position,
    computerShip1Axis
  );
  computer.gameboard.placeShipAt(
    computerShip2,
    computerShip2Position,
    computerShip2Axis
  );
  computer.gameboard.placeShipAt(
    computerShip3,
    computerShip3Position,
    computerShip3Axis
  );
  computer.gameboard.placeShipAt(
    computerShip4,
    computerShip4Position,
    computerShip4Axis
  );
  computer.gameboard.placeShipAt(
    computerShip5,
    computerShip5Position,
    computerShip5Axis
  );
}

//temporary display feature - to be deleted later
function displayAreaSetup() {
  displayArea = document.createElement("div");
  displayArea.textContent = "DISPLAY AREA";
  displayArea.style.cssText = `
    color: white;
    font-size: 40px;`;

  mainWrapper.appendChild(displayArea);
}

//multiplayer feature - to be implemented later
// function disableClickBasedOnPlayerTurn() {
//   if (humanTurn) {
//     humanBoardUI.style.pointerEvents = 'none';
//     computerBoardUI.style.pointerEvents = 'auto';
//   }
//   else{
//     humanBoardUI.style.pointerEvents = 'auto';
//     computerBoardUI.style.pointerEvents = 'none';
//   }
// }

function swapTurns() {
  humanTurn = !humanTurn;
  displayArea.textContent = humanTurn ? "Human's turn" : "Computer's turn";
}

function computerPlaysAMove() {
  if (!humanTurn) {
    setTimeout(() => {
      computerAttackOn(human);
      swapTurns();
    }, 700);
  }
  isGameOver();
}

function getAttackableCells(playerBoard) {
  let attackableCells = [];
  let size = playerBoard.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let currentCell = playerBoard[i][j];
      if (!currentCell.isDead()) {
        attackableCells.push(currentCell);
      }
    }
  }
  return attackableCells;
}

function computerAttackOn(player) {
  let attackableCells = getAttackableCells(player.gameboard.board);
  let cellToAttack =
    attackableCells[Math.floor(Math.random() * attackableCells.length)];
  let coordinates = cellToAttack.getCoordinates();
  player.gameboard.receiveAttack(coordinates.x, coordinates.y);
  renderPlayerBoardsUI();
}

function gameplay() {
  human = new Player("Human");
  computer = new Player("Computer");
  humanSetup();
  computerSetup();
  displayAreaSetup();
  renderPlayerBoardsUI();
  displayArea.textContent = "Human's turn";
//   defaultHitsOnComputer();
}

function renderPlayerBoardsUI() {
  boardWrapper.innerHTML = "";
  humanBoardUI = createPlayerBoardUI(human, "human-board");
  computerBoardUI = createPlayerBoardUI(computer, "computer-board");

  computerBoardUI.addEventListener("click", (event) => {
    let id = event.target.id;
    let x = id[1];
    let y = id[3];

    if (humanTurn) {
      let cell = computer.gameboard.board[x][y];
      if (cell.isDead()) {
        console.log("Cell has been hit already");
      } else {
        computer.gameboard.receiveAttack(x, y);
        swapTurns();
        if(!isGameOver()){
            computerPlaysAMove();
        }
      }
    }
  });

  boardWrapper.appendChild(humanBoardUI);
  boardWrapper.appendChild(computerBoardUI);
}

function isGameOver(){
    let players = [human, computer];
    players.forEach(player => {
        if(player.gameboard.haveAllShipsSunk()){
            console.log("GAME OVER");
            if(player.name == "Human"){
                displayArea.textContent = "Computer Wins!";
            }
            else{
                displayArea.textContent = "Human Wins!";
            }
            boardWrapper.innerHTML = "";
            return true;
        }
    });
    return false;
}

//temporary function for tests - to be deleted later
function defaultHitsOnComputer(){
    computer.gameboard.receiveAttack(0, 0);
    computer.gameboard.receiveAttack(0, 1);

    computer.gameboard.receiveAttack(0, 5);
    computer.gameboard.receiveAttack(1, 5);
    computer.gameboard.receiveAttack(2, 5);
    computer.gameboard.receiveAttack(3, 5);

    computer.gameboard.receiveAttack(3, 3);
    computer.gameboard.receiveAttack(4, 3);
    computer.gameboard.receiveAttack(5, 3);

    computer.gameboard.receiveAttack(5, 1);
    computer.gameboard.receiveAttack(6, 1);
    computer.gameboard.receiveAttack(7, 1);
    computer.gameboard.receiveAttack(8, 1);
    computer.gameboard.receiveAttack(9, 1);

    computer.gameboard.receiveAttack(7, 5);
    computer.gameboard.receiveAttack(7, 6);
    computer.gameboard.receiveAttack(7, 7);
    computer.gameboard.receiveAttack(7, 8);
    renderPlayerBoardsUI();
}

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

boardWrapper.addEventListener("click", () => {
  renderPlayerBoardsUI();
});

gameplay();
