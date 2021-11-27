import React from 'react';

import SudokuBoard from './components/board/board';
import { emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';

import './App.css';

function App() {
  // Get data from API endpoint
  const board = emptyBoard();
  // Object w/ 81 keys corresponding to [row A-I][col 1-9]: value (string) [1-9]

  // Construct sudoku board object
  // 9 rows x 9 cols
  // each cell has value or is input

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Sudoku</h1>
      </header>
      <SudokuBoard boardValues={board}></SudokuBoard>
    </div>
  );
}

export default App;
