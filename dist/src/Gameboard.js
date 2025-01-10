import { Cell } from "./Cell";

class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = [];
    this.shipArray = [];
    for (let i = 0; i < this.size; i++) {
      let row = [];
      for (let j = 0; j < this.size; j++) {
        let cell = new Cell(i, j);
        row.push(cell);
      }
      this.board.push(row);
    }
  }

  getBoardSize() {
    return this.size;
  }

  //horizontal placement : axis= 0
  //vertical placement : axis= 1
  shipPlacementCheck(ship, cell, axis, beingHovered=0) {
    let cellXorY = axis == 0 ? cell.y : cell.x;
    if (cellXorY + ship.length - 1 >= this.size) {
      return 0;
    } else {
      let hoveredCells = [];
      for (let i = cellXorY; i < cellXorY + ship.length; i++) {
        let currentCell;
        if (axis) {
          currentCell = this.board[i][cell.y];
        } else {
          currentCell = this.board[cell.x][i];
        }
        if(beingHovered){
          hoveredCells.push(currentCell);
        }
        if (currentCell.containsShip()) {
          return 0;
        }
      }
      return hoveredCells;
    }
  }

  //horizontal placement : axis= 0
  //vertical placement : axis= 1
  placeShipAt(ship, cell, axis) {
    this.shipArray.push(ship);
    this.insertShipOntoCells(ship, cell, axis);
  }

  //insert ship on all cells starting from startCell until
  //the length of the ship
  insertShipOntoCells(ship, startCell, axis) {
    for (let i = 0; i < ship.length; i++) {
      let cell;
      if (axis == 1) {
        cell = this.board[startCell.x + i][startCell.y];
      } else {
        cell = this.board[startCell.x][startCell.y + i];
      }
      cell.insertShip(ship);
      ship.insertIntoContainingCells(cell);
    }
  }

  receiveAttack(x, y) {
    this.board[x][y].hasBeenShot = true;
    if (!this.board[x][y].ship) {
      return 0;
    } else {
      this.board[x][y].ship.hit();
      return 1;
    }
  }

  haveAllShipsSunk() {
    for (let i = 0; i < this.shipArray.length; i++) {
      if (!this.shipArray[i].isSunk()) {
        return false;
      }
    }
    return true;
  }
}

export { Gameboard };
