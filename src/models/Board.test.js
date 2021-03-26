import Board from './Board';

describe('Board', () => {
    describe('constructor', () => {
        it('stores moves in class variable', () => {
            const moves = [[1, 2], [0, 1]];
            const board = new Board(moves);
            expect(board.moves).toEqual(moves);
        });

        describe('when given invalid input', () => {
            it('throws an error', () => {
                const moves = [[1, 3], [0, 1]];
                expect(() => new Board(moves)).toThrowError('Invalid move set provided.');
            });
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
   
    
    describe('#generateBoardArray', () => {
        it("returns correct multi-dimensional array given an array of coordinates", () => {
            const moves = [[1, 2], [0, 1]];
            const board = new Board(moves);

            const boardArray = board.generateBoardArray();

            expect(boardArray[0][0]).toBeNull(); // no move here, so null
            expect(boardArray[1][2]).toEqual(Board.PLAYERS.FIRST_PLAYER); // no move here, so null
            expect(boardArray[0][1]).toEqual(Board.PLAYERS.SECOND_PLAYER); // no move here, so null
        });
    });
});