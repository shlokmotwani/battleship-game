class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
    this.hasBeenShot = false;
  }

  getCoordinates(){
    return {x : this.x, y: this.y};
  }

  insertShip(ship) {
    this.ship = ship;
  }

  containsShip(){
    return this.ship != null;
  }

  getShip(){
    return this.ship;
  }

  isDead(){
    return this.hasBeenShot;
  }
}

export { Cell };
