import { createPlayerBoardUI } from "./DOMController";
import { Ship } from "./Ship";
import { Player } from "./Player";

let mainWrapper;
let boardWrapper;

let player1;
let player2;

let playerShip1;
let playerShip2;
let playerShip3;
let playerShip1Position;
let playerShip2Position;
let playerShip3Position;
let playerShip1Axis;
let playerShip2Axis;
let playerShip3Axis;

let computerShip1;
let computerShip2;
let computerShip3;

let computerShip1Position;
let computerShip2Position;
let computerShip3Position;
let computerShip1Axis;
let computerShip2Axis;
let computerShip3Axis;

let player1BoardUI;
let player2BoardUI;

mainWrapper = document.querySelector("#wrapper-main");
boardWrapper = document.querySelector("#wrapper-gameboard");

player1 = new Player("Player One");
player2 = new Player("Player Two");

playerShip1 = new Ship(3);
playerShip2 = new Ship(5);
playerShip3 = new Ship(4);
playerShip1Position = player1.gameboard.board[0][0];
playerShip2Position = player1.gameboard.board[3][3];
playerShip3Position = player1.gameboard.board[5][5];
playerShip1Axis = 0;
playerShip2Axis = 1;
playerShip3Axis = 0;

computerShip1 = new Ship(2);
computerShip2 = new Ship(3);
computerShip3 = new Ship(5);

computerShip1Position = player1.gameboard.board[0][0];
computerShip2Position = player1.gameboard.board[3][3];
computerShip3Position = player1.gameboard.board[5][5];
computerShip1Axis = 0;
computerShip2Axis = 1;
computerShip3Axis = 0;

player1.gameboard.placeShipAt(playerShip1, playerShip1Position, playerShip1Axis);
player1.gameboard.placeShipAt(playerShip2, playerShip2Position, playerShip2Axis);
player1.gameboard.placeShipAt(playerShip3, playerShip3Position, playerShip3Axis);

player2.gameboard.placeShipAt(computerShip1, computerShip1Position, computerShip1Axis);
player2.gameboard.placeShipAt(computerShip2, computerShip2Position, computerShip2Axis);
player2.gameboard.placeShipAt(computerShip3, computerShip3Position, computerShip3Axis);

player1BoardUI = createPlayerBoardUI(player1);
player2BoardUI = createPlayerBoardUI(player2);

boardWrapper.addEventListener("click", () => {
  boardWrapper.innerHTML = "";
  player1BoardUI = createPlayerBoardUI(player1);
  player2BoardUI = createPlayerBoardUI(player2);
  boardWrapper.appendChild(player1BoardUI);
  boardWrapper.appendChild(player2BoardUI);
});

boardWrapper.appendChild(player1BoardUI);
boardWrapper.appendChild(player2BoardUI);


//temporary display - to be deleted later
let displayArea = document.createElement("div");
displayArea.textContent = "DISPLAY AREA";
displayArea.style.cssText = `
color: white;
font-size: 40px;`;

mainWrapper.appendChild(displayArea);