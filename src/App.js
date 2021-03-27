import './App.css';
import useTicTacToe from './hooks/useTicTacToe';
import Header from './components/Header';
import Board from './components/Board';
import PlayAgainModal from './components/PlayAgainModal';

function App() {
  const { board, move, nextTurn, reset, winnerOrTie } = useTicTacToe();

  return (
    <div className="App">
      <Header
        nextTurn={nextTurn}
        winnerOrTie={winnerOrTie}
      />
      <Board
        board={board}
        move={move}
      >
        <PlayAgainModal
          shouldDisplay={winnerOrTie !== null}
          resetBoard={reset}
        />
      </Board>
    </div>
  );
}

export default App;
