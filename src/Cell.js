class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
    this.hasBeenShot = false;
  }

  insertShip(ship) {
    this.ship = ship;
  }

  containsShip(){
    return this.ship != null;
  }
}

export { Cell };
