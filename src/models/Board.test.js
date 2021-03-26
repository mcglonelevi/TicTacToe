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

    describe('#getWinnerOrTie', () => {
        describe('horizontal win case', () => {
            it("returns \"x\" in x win state", () => {
                const moves = [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]];
                const board = new Board(moves);
                expect(board.getWinnerOrTie()).toEqual(Board.PLAYERS.FIRST_PLAYER);
            });
        });


        describe('vertical win case', () => {
            it("returns \"o\" in o win state", () => {
                const moves = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 2], [2, 1]];
                const board = new Board(moves);
                expect(board.getWinnerOrTie()).toEqual(Board.PLAYERS.SECOND_PLAYER);
            });
        });

        describe('diagonal win cases', () => {
            it("returns expected winner in falling diagonal case", () => {
                const moves = [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]];
                const board = new Board(moves);
                expect(board.getWinnerOrTie()).toEqual(Board.PLAYERS.FIRST_PLAYER);
            });

            it("returns expected winner in rising diagonal case", () => {
                const moves = [[0, 2], [0, 1], [1, 1], [1, 2], [2, 0]];
                const board = new Board(moves);
                expect(board.getWinnerOrTie()).toEqual(Board.PLAYERS.FIRST_PLAYER);
            });
        });

        it("returns \"tie\" in tie state", () => {
            const moves = [[0, 0], [0, 2], [0, 1], [1, 0], [1, 2], [1, 1], [2, 0], [2, 2], [2, 1]];
            const board = new Board(moves);
            expect(board.getWinnerOrTie()).toEqual(Board.TIE_STATE);
        });

        it("returns null if no tie or winner", () => {
            const moves = [[1, 2], [0, 1]];
            const board = new Board(moves);
            expect(board.getWinnerOrTie()).toBeNull();
        });
    });
   
    
    describe('#generateBoardArray', () => {
        it("returns correct multi-dimensional array given an array of coordinates", () => {
            const moves = [[1, 2], [0, 1]];
            const board = new Board(moves);

            const boardArray = board.generateBoardArray();

            expect(boardArray[0][0]).toBeNull(); // no move here, so null
            expect(boardArray[1][2]).toEqual(Board.PLAYERS.FIRST_PLAYER);
            expect(boardArray[0][1]).toEqual(Board.PLAYERS.SECOND_PLAYER);
        });
    });
});