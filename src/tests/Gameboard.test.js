import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

describe("Gameboard test", () => {
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
