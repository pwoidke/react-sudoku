import { useEffect, useState } from 'react';

import SudokuBoard from './components/board/sudokuBoard';
import { emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  // Get data from API endpoint
  const board = emptyBoard();
  // Object w/ 81 keys corresponding to [row A-I][col 1-9]: value (string) [1-9]

  const [gameBoard, setGameBoard] = useState(emptyBoard());

  useEffect(() => {
    getNewGame('easy').then((gameData) => {
      if (gameData) {
        setGameBoard({ ...emptyBoard, ...gameData.puzzle });
      }
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Sudoku</h1>
      </header>
      <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
      <SudokuBoard boardValues={gameBoard}></SudokuBoard>
    </div>
  );
}

export default App;
