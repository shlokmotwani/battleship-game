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
  placeShipAt(ship, cell, axis){
    if(axis == 0){
      if(cell.x + ship.length >= this.size){
        return -1;
      }
      else{
        return 1;
      }
    }
  }
}

export {Gameboard}
