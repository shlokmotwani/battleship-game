import { Cell } from "./Cell";
import { Ship } from "./Ship";

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = [];
    for (let i = 0; i < this.size; i++) {
      let row = [];
      for (let j = 0; j < this.size; j++) {
        let cell = new Cell(i, j);
        row.push(cell);
      }
      this.board.push(row);
    }
  }

  //horizontal placement : axis= 0
  //vertical placement : axis= 1
  placeShipAt(ship, cell, axis) {
    let cellXorY = axis == 0 ? cell.x : cell.y;

    if (cellXorY + ship.length >= this.size) {
      return -1;
    } else {
      this.insertShipOntoCells(cell, ship, axis);
      return 1;
    }
  }

  //insert ship on all cells starting from startCell until
  //the length of the ship
  insertShipOntoCells(startCell, ship, axis){
    for(let i=0; i<ship.length; i++){
      if(axis == 0){
        this.board[startCell.x + i][startCell.y].insertShip(ship);
      }
      else{
        this.board[startCell.x][startCell.y + i].insertShip(ship);
      }
    }
  }
}

export { Gameboard };
