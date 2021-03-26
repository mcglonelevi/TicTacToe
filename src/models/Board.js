export default class Board {
    static PLAYERS = {
        FIRST_PLAYER: "X",
        SECOND_PLAYER: "Y",
    };

    static validateMoves(moves) {
        moves.forEach(([x, y]) => {
            if (x > 2 || y > 2) {
                throw new Error('Invalid move set provided.');
            }
        });
    }

    constructor(moves) {
        Board.validateMoves(moves);

        this.moves = moves;
    }

    /**
     * Given a move set, we can determine the layout of the tic tac toe board.  By convention, x
     * will be first player, o will be second player. The result will be a 3x3 of "x"|"o"|null
     */
    generateBoardArray() {
        const baseBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        return this.moves.reduce((board, [x, y], currentIndex) => {
            const player = currentIndex % 2 === 0 ? Board.PLAYERS.FIRST_PLAYER : Board.PLAYERS.SECOND_PLAYER;
            board[x][y] = player;
            return board;
        }, baseBoard);
    }
}