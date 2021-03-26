export default class Board {
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
}