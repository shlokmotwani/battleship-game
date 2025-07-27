import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

test('check if ship is sunk', ()=>{
    let ship = new Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('check for containing cells', ()=>{
    let gameboard = new Gameboard();
    let ship1 = new Ship(5);
    let ship2 = new Ship(5);
    let cell = gameboard.board[3][4];
    let axis = 0;
    gameboard.placeShipAt(ship2, cell, axis);

    expect(ship1.getContainingCells()).toStrictEqual([]);
    expect(ship2.getContainingCells().length).toBe(5);
});