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
  let size = computer.gameboard.getBoardSize();
  let shipLengths = [2, 3, 3, 4, 5];
  let shipCount = shipLengths.length;

  function getRandomValidCellFor(ship, axis) {
    while (true) {
      let x = Math.floor(Math.random() * size);
      let y = Math.floor(Math.random() * size);
      let cell = computer.gameboard.board[x][y];
      if (computer.gameboard.shipPlacementCheck(ship, cell, axis)) {
        return cell;
      }
    }
  }

  for (let i = 0; i < shipCount; i++) {
    let len = shipLengths.pop();
    let ship = new Ship(len);
    let axis = Math.round(Math.random());
    let cell = getRandomValidCellFor(ship, axis);

    computer.gameboard.placeShipAt(ship, cell, axis);
  }
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
      let winner = getWinnerIfGameOver();
      if (winner) {
        winnerDeclaration(winner);
      }
    }, 700);
  }
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
  //   defaultHitsOnHuman();
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
        let winner = getWinnerIfGameOver();
        if (!winner) {
          computerPlaysAMove();
        } else {
          winnerDeclaration(winner);
        }
      }
    }
  });

  boardWrapper.appendChild(humanBoardUI);
  boardWrapper.appendChild(computerBoardUI);
}

function getWinnerIfGameOver() {
  let players = [human, computer];
  let winner = null;
  players.forEach((player) => {
    if (player.gameboard.haveAllShipsSunk()) {
      winner = player;
      return;
    }
  });
  return winner;
}

function winnerDeclaration(player) {
  console.log("GAME OVER");
  if (player.name == "Human") {
    displayArea.textContent = "Computer Wins!";
  } else {
    displayArea.textContent = "Human Wins!";
  }
  boardWrapper.innerHTML = "";
}

//temporary function for tests - to be deleted later
function defaultHitsOnComputer() {
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

function defaultHitsOnHuman() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 10; j++) {
      human.gameboard.receiveAttack(i, j);
    }
  }
  human.gameboard.receiveAttack(9, 0);
  human.gameboard.receiveAttack(9, 1);
  human.gameboard.receiveAttack(9, 2);
  human.gameboard.receiveAttack(9, 3);
  human.gameboard.receiveAttack(9, 4);
  human.gameboard.receiveAttack(9, 5);
  human.gameboard.receiveAttack(9, 7);
  human.gameboard.receiveAttack(9, 8);
  human.gameboard.receiveAttack(9, 9);
  renderPlayerBoardsUI();
}

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

boardWrapper.addEventListener("click", () => {
  renderPlayerBoardsUI();
});

gameplay();
