import React, { useEffect, useState } from 'react';

import SudokuBoard from './components/board/sudokuBoard';
import { Board, emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { checkSolution } from './utils/solver';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  const [gameBoard, setGameBoard] = useState(emptyBoard());
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  useEffect(() => {
    // Get data from API endpoint
    getNewGame('easy').then((gameData) => {
      if (gameData) {
        setGameBoard({ ...emptyBoard(), ...gameData.puzzle });
      }
    });
  }, []);

  const onCheckSolved = (gameBoard: Board) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPuzzleSolved(checkSolution(gameBoard));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Sudoku</h1>
      </header>
      <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
      <SudokuBoard boardValues={gameBoard}></SudokuBoard>
      <button onClick={onCheckSolved(gameBoard)}>Check solution</button>
      <h3>Solved? {puzzleSolved ? 'Oh yeah' : 'Nope'}</h3>
    </div>
  );
}

export default App;
