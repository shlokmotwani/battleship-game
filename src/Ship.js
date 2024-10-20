class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.containingCells = []; //stores which cells contain this ship
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    return this.hitCount == this.length;
  }

  insertIntoContainingCells(cell){
    this.containingCells.push(cell);
  }

  getContainingCells(){
    return this.containingCells;
  }
}

export { Ship };
