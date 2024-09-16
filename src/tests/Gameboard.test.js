import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe('Gameboard test', ()=>{
    let gameboard = new Gameboard();
    test('Ship placements', ()=>{
        expect(gameboard.placeShipAt(new Ship(5), gameboard.board[0][0], 0)).toBe(1);
    });
})