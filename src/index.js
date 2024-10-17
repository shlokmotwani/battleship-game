import { createPlayerBoardUI } from "./DOMController";
import { Ship } from "./Ship";
import { Player } from "./Player";

let mainWrapper = document.querySelector("#wrapper-main");
let boardWrapper = document.querySelector("#wrapper-gameboard");

let player1 = new Player("Player One");
let player2 = new Player("Player Two");

let playerShip1 = new Ship(3);
let playerShip2 = new Ship(5);
let playerShip3 = new Ship(4);
let ship1Position = player1.gameboard.board[0][0];
let ship2Position = player1.gameboard.board[3][3];
let ship3Position = player1.gameboard.board[5][5];
let ship1Axis = 0;
let ship2Axis = 1;
let ship3Axis = 0;
player1.gameboard.placeShipAt(playerShip1, ship1Position, ship1Axis);
player1.gameboard.placeShipAt(playerShip2, ship2Position, ship2Axis);
player1.gameboard.placeShipAt(playerShip3, ship3Position, ship3Axis);

let player1BoardUI = createPlayerBoardUI(player1);
let player2BoardUI = createPlayerBoardUI(player2);

boardWrapper.addEventListener("click", () => {
  boardWrapper.innerHTML = "";
  player1BoardUI = createPlayerBoardUI(player1);
  player2BoardUI = createPlayerBoardUI(player2);
  boardWrapper.appendChild(player1BoardUI);
  boardWrapper.appendChild(player2BoardUI);
});

let computerShip1 = new Ship(2);
let computerShip2 = new Ship(3);
let computerShip3 = new Ship(5);

boardWrapper.appendChild(player1BoardUI);
boardWrapper.appendChild(player2BoardUI);
