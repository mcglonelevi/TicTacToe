import { renderHook, act } from '@testing-library/react-hooks'
import Board from '../models/Board';
import useTicTacToe from './useTicTacToe';

function mountHook() {
    const { result } = renderHook(() => useTicTacToe());

    const playMove = (coords) => {
        act(() => {
            result.current.move(coords);
        });
    }

    return { result, playMove };
}

describe('useTicTacToe', () => {
    describe('shall we play a game? ;)', () => {
        it('plays a winning game', () => {
            const { result, playMove } = mountHook();

            expect(result.current.nextTurn).toEqual(Board.PLAYERS.FIRST_PLAYER);
    
            playMove([0, 0]);
    
            expect(result.current.board[0][0]).toEqual(Board.PLAYERS.FIRST_PLAYER);
            expect(result.current.nextTurn).toEqual(Board.PLAYERS.SECOND_PLAYER);
            expect(result.current.winnerOrTie).toBeNull();
    
            playMove([0, 1]);
    
            expect(result.current.board[0][1]).toEqual(Board.PLAYERS.SECOND_PLAYER);
            expect(result.current.nextTurn).toEqual(Board.PLAYERS.FIRST_PLAYER);
            expect(result.current.winnerOrTie).toBeNull();
    
            playMove([1, 0]);
    
            expect(result.current.winnerOrTie).toBeNull();
    
            playMove([0, 2]);
    
            expect(result.current.winnerOrTie).toBeNull();
    
            playMove([2, 0]);
    
            expect(result.current.winnerOrTie).toEqual(Board.PLAYERS.FIRST_PLAYER);
        });

        it('plays a tied game', () => {
            const { result, playMove } = mountHook();
    
            playMove([0, 0]);
            playMove([1, 0]);
            playMove([2, 0]);
            playMove([1, 1]);
            playMove([0, 1]);
            playMove([0, 2]);
            playMove([2, 1]);
            playMove([2, 2]);
            playMove([1, 2]);

            expect(result.current.winnerOrTie).toEqual(Board.TIE_STATE);
            expect(result.current.nextTurn).toBeNull();
        });
    });

    describe('back', () => {
        it('sets the board back to the previous state', () => {
            const { result, playMove } = mountHook();

            expect(result.current.board[0][0]).toBeNull();
    
            playMove([0, 0]);
    
            expect(result.current.board[0][0]).toEqual(Board.PLAYERS.FIRST_PLAYER);
            expect(result.current.nextTurn).toEqual(Board.PLAYERS.SECOND_PLAYER);
    
            act(() => {
                result.current.back();
            });
    
            expect(result.current.board[0][0]).toBeNull();
        });
    });

    describe('reset', () => {
        it('sets the board back to the default state', () => {
            const { result, playMove } = mountHook();

            expect(result.current.board[0][0]).toBeNull();
    
            playMove([0, 0]);
    
            expect(result.current.board[0][0]).toEqual(Board.PLAYERS.FIRST_PLAYER);
            expect(result.current.nextTurn).toEqual(Board.PLAYERS.SECOND_PLAYER);
    
            act(() => {
                result.current.reset();
            });
    
            expect(result.current.board[0][0]).toBeNull();
        });
    });
});
