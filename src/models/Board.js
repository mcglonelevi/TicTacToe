export default class Board {
    static PLAYERS = {
        FIRST_PLAYER: "X",
        SECOND_PLAYER: "O",
    };

    static TIE_STATE = "TIE";

    static getPlayerForTurn = (turnNumber) => {
        if (turnNumber > 9) {
            return null;
        }
        return turnNumber % 2 === 1 ? Board.PLAYERS.FIRST_PLAYER : Board.PLAYERS.SECOND_PLAYER;
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
            const player = Board.getPlayerForTurn(currentIndex + 1);
            board[x][y] = player;
            return board;
        }, baseBoard);
    }

    getWinnerOrTie() {
        const board = this.generateBoardArray();

        // check horizontal
        for (let i = 0; i < 3; i++) {
            const row = board[i];
            if (this._checkForWin(row)) {
                return row[0];
            }
        }

        // check vertical
        for (let i = 0; i < 3; i++) {
            const column = [board[0][i], board[1][i], board[2][i]];
            if (this._checkForWin(column)) {
                return column[0];
            }
        }

        // check diagonals
        if (this._checkForWin([board[0][0], board[1][1], board[2][2]])) {
            return board[0][0];
        }

        if (this._checkForWin([board[0][2], board[1][1], board[2][0]])) {
            return board[0][2];
        }

        // tie case
        const isTie = [...board[0], ...board[1], ...board[2]].every((value) => value != null);
        if (isTie) {
            return Board.TIE_STATE;
        }

        // default case
        return null;
    }

    _checkForWin(spots) {
        /**
         * no win is possible if we have a null value
         * we only have to check the first spot for the null value
         * because of checking the equality of all three spots below
         */ 
        if (spots[0] === null) {
            return false;
        }
        return spots[0] === spots[1] && spots[1] === spots[2];
    }
}