import BoardModel from '../models/Board';

export default function Header({ nextTurn, winnerOrTie }) {
    if (winnerOrTie === null) {
        return <h1>It is {nextTurn}'s turn.</h1>;
    }
  
    if (winnerOrTie === BoardModel.TIE_STATE) {
        return <h1>It was a tie.</h1>;
    }
  
    return <h1>{winnerOrTie} won the game!</h1>
}
  