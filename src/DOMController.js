import "./style/DOMController.css";

function createPlayerBoardUI(player, boardID) {
  let board = document.createElement("div");
  board.classList.add("board");
  board.id = boardID;

  //insert cells into the board and add Event Listeners to them
  for (let i = 0; i < player.gameboard.size; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < player.gameboard.size; j++) {
      let cellUI = document.createElement("div");
      cellUI.id = `(${i},${j})`;
      cellUI.classList.add("cell");

      //cells containing ship
      if (player.gameboard.board[i][j].containsShip()) {
        cellUI.classList.add("ship-cell");
      }

      //attacked cells
      if (player.gameboard.board[i][j].hasBeenShot) {
        cellUI.classList.add("hit-cell");
      }

      //sunk ship cells
      if(player.gameboard.board[i][j].containsShip()){
        if (player.gameboard.board[i][j].getShip().isSunk()) {
          cellUI.classList.add("sunk-cell");
        }
      }

      row.appendChild(cellUI);
    }
    board.appendChild(row);
  }
  return board;
}

export { createPlayerBoardUI };
