import { createPlayerBoardUI } from "./DOMController";
import { Ship } from "./Ship";
import { Player } from "./Player";

let mainWrapper;
let boardWrapper;

let human;
let computer;

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

let humanBoardUI;
let computerBoardUI;
let humanTurn = true;

function humanSetup() {
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

  human.gameboard.placeShipAt(
    humanShip1,
    humanShip1Position,
    humanShip1Axis
  );
  human.gameboard.placeShipAt(
    humanShip2,
    humanShip2Position,
    humanShip2Axis
  );
  human.gameboard.placeShipAt(
    humanShip3,
    humanShip3Position,
    humanShip3Axis
  );
  human.gameboard.placeShipAt(
    humanShip4,
    humanShip4Position,
    humanShip4Axis
  );
  human.gameboard.placeShipAt(
    humanShip5,
    humanShip5Position,
    humanShip5Axis
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
  if (humanTurn) {
  }
}

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

boardWrapper.addEventListener("click", () => {
  boardWrapper.innerHTML = "";
  humanBoardUI = createPlayerBoardUI(human, "human-board");
  computerBoardUI = createPlayerBoardUI(computer, "computer-board");
  boardWrapper.appendChild(humanBoardUI);
  boardWrapper.appendChild(computerBoardUI);
});

human = new Player("Human");
computer = new Player("Computer");
humanSetup();
computerSetup();
displayAreaSetup();

humanBoardUI = createPlayerBoardUI(human, "human-board");
computerBoardUI = createPlayerBoardUI(computer, "computer-board");

boardWrapper.appendChild(humanBoardUI);
boardWrapper.appendChild(computerBoardUI);

gameplay();
