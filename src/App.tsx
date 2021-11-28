import React, { useEffect, useState } from 'react';

import SudokuBoard from './components/board/sudokuBoard';
import { Board, emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { checkSolution, solveSudoku } from './utils/solver';
import { mapEnum, randomEnum } from './utils/enum';
import { Difficulties } from './utils/constants';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  const [gameBoard, setGameBoard] = useState(emptyBoard());
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

  useEffect(() => {
    getNewGameData(selectedDifficulty);
    // eslint-disable-next-line
  }, []);

  const getNewGameData = (difficulty: string) => {
    // Get new game data
    getNewGame(difficulty).then((gameData) => {
      if (gameData) {
        setSelectedDifficulty(gameData.difficulty);
        updateBoard({ ...emptyBoard(), ...gameData.puzzle });
      }
    });
  };

  const updateBoard = (updatedBoard: Board) => {
    setGameBoard(updatedBoard);
    setPuzzleSolved(checkSolution(gameBoard));
  };

  const onCheckSolved = (gameBoard: Board) => (e: React.MouseEvent) => {
    setPuzzleSolved(checkSolution(gameBoard));
  };

  return (
    <div className='App'>
      <header>
        <h1>Sudoku</h1>
      </header>
      <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
      <SudokuBoard boardValues={gameBoard} updateBoard={updateBoard}></SudokuBoard>
      <div className='generate-buttons'>
        <h3>Generate:</h3>
        {mapEnum(Difficulties, (difficulty: string) => {
          return (
            <button key={difficulty} onClick={() => getNewGameData(difficulty)}>
              {difficulty}
            </button>
          );
        })}
        <button
          onClick={() => {
            getNewGameData(randomEnum(Difficulties).toLowerCase());
          }}
        >
          Random
        </button>
      </div>
      <div className='game-info'>
        <div className='info-item'>
          <button onClick={onCheckSolved(gameBoard)}>Solved?</button>
          <h3>{puzzleSolved ? 'Yep' : 'Nope'}</h3>
        </div>
        <div className='info-item'>
          <h3>Difficulty:</h3>
          <p>{selectedDifficulty}</p>
        </div>
      </div>
      <button
        className='button-solve'
        onClick={() => {
          updateBoard(solveSudoku(gameBoard));
        }}
      >
        Solve this bad boy for me
      </button>
    </div>
  );
}

export default App;
