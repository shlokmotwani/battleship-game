import { Cell } from "./Cell";
import { Player } from "./Player";
import "./style/DOMController.css";

let mainWrapper = document.querySelector("#wrapper-main");
let boardWrapper = document.querySelector("#wrapper-gameboard");

let player1 = new Player("Player One");
let player2 = new Player("Player Two");

let player1Board = createPlayerBoardUI(player1);
let player2Board = createPlayerBoardUI(player2);

function createPlayerBoardUI(player) {
  let board = document.createElement("div");
  board.classList.add("board");
  boardWrapper.appendChild(board);

  //insert cells into the board and add Event Listeners to them
  for (let i = 0; i < player.gameboard.size; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < player.gameboard.size; j++) {
      let cellUI = document.createElement("div");
      cellUI.classList.add("cell");
      row.appendChild(cellUI);

      cellEventListener(cellUI, i, j);
    }
    board.appendChild(row);
  }
  return board;
}

function cellEventListener(cellUI, i, j) {
  cellUI.addEventListener("mouseover", () => {
    console.log(i + " " + j);
  });
}

export { createPlayerBoardUI };
