import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe("Gameboard ship placements test", () => {
  let gameboard = new Gameboard();
  test("Ship placements on X-axis", () => {
    expect(gameboard.placeShipAt(new Ship(5), gameboard.board[0][0], 0)).toBe(
      1
    );
    expect(gameboard.placeShipAt(new Ship(3), gameboard.board[5][5], 0)).toBe(
      1
    );
    expect(gameboard.placeShipAt(new Ship(12), gameboard.board[1][1], 0)).toBe(
      -1
    );
    expect(gameboard.placeShipAt(new Ship(1), gameboard.board[9][9], 0)).toBe(
      -1
    );
    expect(gameboard.placeShipAt(new Ship(4), gameboard.board[6][8], 0)).toBe(
      -1
    );
  });

  test("Ship placements on Y-axis", () => {
    expect(gameboard.placeShipAt(new Ship(5), gameboard.board[0][0], 1)).toBe(
      1
    );
    expect(gameboard.placeShipAt(new Ship(3), gameboard.board[5][5], 1)).toBe(
      1
    );
    expect(gameboard.placeShipAt(new Ship(12), gameboard.board[1][1], 1)).toBe(
      -1
    );
    expect(gameboard.placeShipAt(new Ship(1), gameboard.board[9][9], 1)).toBe(
      -1
    );
    expect(gameboard.placeShipAt(new Ship(4), gameboard.board[6][8], 1)).toBe(
      -1
    );
  });
});

describe("Gameboard receives attack", () => {
  let gameboard = new Gameboard();

  test('empty cells', ()=>{
    expect(gameboard.board[0][5].ship).toBeNull();
    expect(gameboard.board[7][5].ship).toBeNull();
    expect(gameboard.board[9][9].ship).toBeNull();
    expect(gameboard.board[3][6].ship).toBeNull();
  });

  let ship1 = new Ship(5);
  gameboard.placeShipAt(ship1, gameboard.board[2][5], 0);
  let ship2 = new Ship(2);
  gameboard.placeShipAt(ship2, gameboard.board[7][7], 0);
  let ship3 = new Ship(3);
  gameboard.placeShipAt(ship3, gameboard.board[2][6], 1);
  let ship4 = new Ship(4);
  gameboard.placeShipAt(ship4, gameboard.board[5][5], 1);

  test('non-empty cells', ()=>{
    expect(gameboard.board[4][5].ship).not.toBeNull();
    expect(gameboard.board[6][5].ship).not.toBeNull();
    expect(gameboard.board[7][7].ship).not.toBeNull();
    expect(gameboard.board[8][7].ship).not.toBeNull();
    expect(gameboard.board[2][7].ship).not.toBeNull();
    expect(gameboard.board[2][8].ship).not.toBeNull();
    expect(gameboard.board[5][8].ship).not.toBeNull();
    expect(gameboard.board[5][5].ship).not.toBeNull();
  });

  test('Empty cells receive attack', ()=>{
    expect(gameboard.receiveAttack(7, 5)).toBe(0);
    expect(gameboard.board[7][5].hasBeenShot).toBeTruthy();
    expect(gameboard.receiveAttack(0, 5)).toBe(0);
    expect(gameboard.board[0][5].hasBeenShot).toBeTruthy();
    expect(gameboard.receiveAttack(9, 9)).toBe(0);
    expect(gameboard.board[9][9].hasBeenShot).toBeTruthy();
    expect(gameboard.board[6][6].hasBeenShot).toBeFalsy();
    expect(gameboard.board[1][7].hasBeenShot).toBeFalsy();
    expect(gameboard.board[6][6].hasBeenShot).toBeFalsy();
    expect(gameboard.board[7][0].hasBeenShot).toBeFalsy();
  });

  test('Non-empty cells receive attack', ()=>{
    expect(gameboard.receiveAttack(2, 5)).toBe(1);
    expect(gameboard.board[2][5].hasBeenShot).toBeTruthy();
    expect(gameboard.receiveAttack(6, 5)).toBe(1);
    expect(gameboard.board[6][5].hasBeenShot).toBeTruthy();
    expect(gameboard.receiveAttack(2, 8)).toBe(1);
    expect(gameboard.board[2][8].hasBeenShot).toBeTruthy();
    expect(gameboard.receiveAttack(5, 7)).toBe(1);
    expect(gameboard.board[5][7].hasBeenShot).toBeTruthy();
  })
});