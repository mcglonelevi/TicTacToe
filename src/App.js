import './App.css';
import useTicTacToe from './hooks/useTicTacToe';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const { board, move, nextTurn, winnerOrTie } = useTicTacToe();

  return (
    <div className="App">
      <Header
        nextTurn={nextTurn}
        winnerOrTie={winnerOrTie}
      />
      <Board
        board={board}
        move={move}
      />    
    </div>
  );
}

export default App;
