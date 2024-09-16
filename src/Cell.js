class Cell{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.ship = null;
    }

    insertShip(ship){
        this.ship = ship;
    }
}

export {Cell}