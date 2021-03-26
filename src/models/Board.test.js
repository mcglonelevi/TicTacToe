import Board from './Board';

describe('Board', () => {
    describe('constructor', () => {
        it('stores moves in class variable', () => {
            const moves = [[1, 2], [0, 1]];
            const board = new Board(moves);
            expect(board.moves).toEqual(moves);
        });
    });

    xdescribe('#getWinnerOrTie', () => {
        it("returns \"x\" in x win state", () => {

        });

        it("returns \"o\" in o win state", () => {

        });

        it("returns \"tie\" in tie state", () => {

        });

        it("returns null if no tie or winner", () => {

        });
    });
   
    
    xdescribe('#generateBoardArray', () => {
        it("returns correct multi-dimensional array given an array of coordinates", () => {

        });
    });
});