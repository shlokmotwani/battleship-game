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
let shipLengths = [2, 3, 3, 4, 5];
let totalShipsToBePlaced = shipLengths.length;
let currentAxis = 0;
let gameStarted = false;
let placedShipCount;
let controllerDiv;

//initialisation of human board
function humanSetup() {
  let placeButton;
  let axisButton;
  controllerDiv = document.createElement("div");
  controllerDiv.style.cssText = `
    display: flex;
    flex-direction: column;`;

  placeButton = document.createElement("button");
  placeButton.id = "place-button";
  placeButton.textContent = "Place ships";

  axisButton = document.createElement("button");
  axisButton.id = "axis-button";
  axisButton.textContent = "Change axis";

  placeButton.addEventListener("click", () => {
    placeButton.style.visibility = "hidden";
    displayArea.textContent = "Place your ships, human!";
    gameStarted = true;
    renderPlayerBoardsUI();
  });

  axisButton.addEventListener("click", () => {
    currentAxis = currentAxis == 0 ? 1 : 0;
  });

  controllerDiv.appendChild(placeButton);
  controllerDiv.appendChild(axisButton);
}

//initialisation of computer board
function computerSetup() {
  let size = computer.gameboard.getBoardSize();
  let shipLengths = [2, 3, 3, 4, 5];
  let totalShipCount = shipLengths.length;

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

  //place randomly created ships on the board
  for (let i = 0; i < totalShipCount; i++) {
    let len = shipLengths.pop();
    let ship = new Ship(len);
    let axis = Math.round(Math.random());
    let cell = getRandomValidCellFor(ship, axis);
    computer.gameboard.placeShipAt(ship, cell, axis);
  }
}

//temporary display feature - to be deleted later
function displayAreaSetup() {
  let displayDiv = document.createElement("div");
  displayDiv.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;`;

  displayArea = document.createElement("div");
  displayArea.style.cssText = `
    color: white;
    font-size: 40px;
    height: 100px;`;

  displayDiv.appendChild(displayArea);
  mainWrapper.appendChild(displayDiv);
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
  placedShipCount = 0;
  human = new Player("Human");
  computer = new Player("Computer");
  humanSetup();
  computerSetup();
  displayAreaSetup();
  renderPlayerBoardsUI();

  //the following are functions used in testing
  //   defaultHitsOnComputer();
  //   defaultHitsOnHuman();
}

function renderPlayerBoardsUI() {
  let totalShipCount = shipLengths.length;
  let hoveredCells;

  boardWrapper.innerHTML = "";
  humanBoardUI = createPlayerBoardUI(human, "human-board");
  computerBoardUI = createPlayerBoardUI(computer, "computer-board");

  if (gameStarted) {
    humanBoardUI.addEventListener("mouseover", (event) => {
      let id = event.target.id;
      let x = id[1];
      let y = id[3];

      //ignores unnecessary target events
      if (isNaN(x)) {
        return;
      }

      // place ships one-by-one on the board
      for (let i = 0; i < totalShipCount; i++) {
        let len = shipLengths[shipLengths.length - 1];
        let ship = new Ship(len);
        let cell = human.gameboard.board[x][y];
        let beingHovered = 1;
        hoveredCells = human.gameboard.shipPlacementCheck(
          ship,
          cell,
          currentAxis,
          beingHovered
        );
        if (hoveredCells) {
          for (let i = 0; i < hoveredCells.length; i++) {
            let x = hoveredCells[i].getCoordinates().x;
            let y = hoveredCells[i].getCoordinates().y;
            humanBoardUI.children[x].children[y].classList.add("hovered-cell");
          }
        }
      }
    });

    humanBoardUI.addEventListener("mouseout", () => {
      if (hoveredCells) {
        for (let i = 0; i < hoveredCells.length; i++) {
          let x = hoveredCells[i].getCoordinates().x;
          let y = hoveredCells[i].getCoordinates().y;
          humanBoardUI.children[x].children[y].classList.remove("hovered-cell");
        }
      }
    });

    humanBoardUI.addEventListener("click", () => {
      if (hoveredCells) {
        let ship = new Ship(shipLengths.pop());
        human.gameboard.placeShipAt(ship, hoveredCells[0], currentAxis);
        placedShipCount++;
        if (placedShipCount == totalShipsToBePlaced) {
          displayArea.textContent = "Human's turn";
        }
      }
    });
  }

  computerBoardUI.addEventListener("click", (event) => {
    //the following few lines will fetch coordinates from a board
    //less than 10 in size
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
  boardWrapper.appendChild(controllerDiv);
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
