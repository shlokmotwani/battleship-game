import { createPlayerBoardUI } from "./DOMController";
import { Ship } from "./Ship";
import { Player } from "./Player";

let mainWrapper;
let boardWrapper;

let player;
let computer;

let playerShip1;
let playerShip2;
let playerShip3;
let playerShip4;
let playerShip5;
let playerShip1Position;
let playerShip2Position;
let playerShip3Position;
let playerShip4Position;
let playerShip5Position;
let playerShip1Axis;
let playerShip2Axis;
let playerShip3Axis;
let playerShip4Axis;
let playerShip5Axis;

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

let playerBoardUI;
let computerBoardUI;
let playerTurn = true;

function playerSetup() {
  playerShip1 = new Ship(3);
  playerShip2 = new Ship(5);
  playerShip3 = new Ship(4);
  playerShip4 = new Ship(3);
  playerShip5 = new Ship(2);
  playerShip1Position = player.gameboard.board[0][0];
  playerShip2Position = player.gameboard.board[3][3];
  playerShip3Position = player.gameboard.board[5][5];
  playerShip4Position = player.gameboard.board[7][6];
  playerShip5Position = player.gameboard.board[1][7];
  playerShip1Axis = 0;
  playerShip2Axis = 1;
  playerShip3Axis = 0;
  playerShip4Axis = 1;
  playerShip5Axis = 0;

  player.gameboard.placeShipAt(
    playerShip1,
    playerShip1Position,
    playerShip1Axis
  );
  player.gameboard.placeShipAt(
    playerShip2,
    playerShip2Position,
    playerShip2Axis
  );
  player.gameboard.placeShipAt(
    playerShip3,
    playerShip3Position,
    playerShip3Axis
  );
  player.gameboard.placeShipAt(
    playerShip4,
    playerShip4Position,
    playerShip4Axis
  );
  player.gameboard.placeShipAt(
    playerShip5,
    playerShip5Position,
    playerShip5Axis
  );
}

function computerSetup() {
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

//temporary display - to be deleted later
function displayAreaSetup() {
  let displayArea = document.createElement("div");
  displayArea.textContent = "DISPLAY AREA";
  displayArea.style.cssText = `
    color: white;
    font-size: 40px;`;

  mainWrapper.appendChild(displayArea);
}

function gameplay() {
  if (playerTurn) {
  }
}

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

boardWrapper.addEventListener("click", () => {
  boardWrapper.innerHTML = "";
  playerBoardUI = createPlayerBoardUI(player, "player-board");
  computerBoardUI = createPlayerBoardUI(computer, "computer-board");
  boardWrapper.appendChild(playerBoardUI);
  boardWrapper.appendChild(computerBoardUI);
});

player = new Player("Human");
computer = new Player("Computer");
playerSetup();
computerSetup();
displayAreaSetup();

playerBoardUI = createPlayerBoardUI(player, "player-board");
computerBoardUI = createPlayerBoardUI(computer, "computer-board");

boardWrapper.appendChild(playerBoardUI);
boardWrapper.appendChild(computerBoardUI);

gameplay();
