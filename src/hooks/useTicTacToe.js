import { useState } from 'react';

import Board from '../models/Board';

export default function useTicTacToe() {
    const [moves, setMoves] = useState([]);

    const move = (newMove) => {
        setMoves((currMoves) => {
            return [...currMoves, newMove];
        });
    };

    const reset = () => {
        setMoves([]);
    };

    const back = () => {
        setMoves((currMoves) => {
            return currMoves.slice(0, currMoves.length - 1);
        });  
    };

    const ticTacToeBoard = new Board(moves);

    return {
        board: ticTacToeBoard.generateBoardArray(),
        move,
        reset,
        back,
        winnerOrTie: ticTacToeBoard.getWinnerOrTie(),
        nextTurn: Board.getPlayerForTurn(moves.length + 1),
    };
}