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
      cellUI.classList.add("cell");

      //cells containing ship
      if (player.gameboard.board[i][j].containsShip()) {
        cellUI.classList.add("ship-cell");
      }

      //attacked cells
      if (player.gameboard.board[i][j].hasBeenShot) {
        cellUI.classList.add("hit-cell");
      }

      row.appendChild(cellUI);

      cellEventListener(player, cellUI, i, j);
    }
    board.appendChild(row);
  }
  return board;
}

function cellEventListener(player, cellUI, i, j) {
  cellUI.addEventListener("click", (event) => {
    player.gameboard.receiveAttack(i, j);
    let boardID = event.currentTarget.parentNode.parentNode.id;
    if(boardID == "player-board"){
      console.log("player board clicked");
    }
    else if(boardID == "computer-board"){
      console.log("computer board clicked");
    }
  });
}

export { createPlayerBoardUI };
