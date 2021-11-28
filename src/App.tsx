import React, { useEffect, useState } from 'react';

import SudokuBoard from './components/board/sudokuBoard';
import { Board, emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { checkBoardValid, solveSudoku } from './utils/solver';
import { mapEnum, randomEnum } from './utils/enum';
import { Difficulties } from './utils/constants';
import { ToastContainer } from 'react-toastify';

import './App.css';

var store = require('store');

const copyByValue = (obj: Object) => JSON.parse(JSON.stringify(obj));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameBoard, setGameBoard] = useState<Board>(emptyBoard());
  const [initialBoard, setInitialBoard] = useState<Board>(emptyBoard());
  const [boardIsValid, setBoardIsValid] = useState(false);
  const [boardHistory, setBoardHistory] = useState<Array<Board>>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

  useEffect(() => {
    getNewGameData(selectedDifficulty);
    // const savedDifficulty = store.get('difficulty');
    // const savedBoardHistory = store.get('boardHistory');
    // savedDifficulty && setSelectedDifficulty(Difficulties.EASY);
    // savedBoardHistory && updateBoard(savedBoardHistory.pop());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    store.set('difficulty', selectedDifficulty);
  }, [selectedDifficulty]);

  useEffect(() => {
    setBoardIsValid(checkBoardValid(gameBoard));
  }, [gameBoard]);

  useEffect(() => {
    store.set('boardHistory', boardHistory);
  }, [boardHistory]);

  const resetBoard = () => {
    updateBoard(initialBoard);
    store.remove('boardHistory');
  };

  const getNewGameData = (difficulty: string) => {
    // Get new game data
    if (!isLoading) {
      setIsLoading(true);
      getNewGame(difficulty).then((gameData) => {
        if (gameData) {
          setSelectedDifficulty(gameData.difficulty);
          const newBoard = { ...emptyBoard(), ...gameData.puzzle };
          setInitialBoard(copyByValue(newBoard));
          updateBoard(copyByValue(newBoard));
        }
        setIsLoading(false);
      });
    }
  };

  const updateBoard = (updatedBoard: Board) => {
    updatedBoard && setGameBoard(copyByValue(updatedBoard));
    updatedBoard && setBoardHistory([...boardHistory, copyByValue(updatedBoard)]);
  };

  const onCheckValid = (gameBoard: Board) => (e: React.MouseEvent) => {
    setBoardIsValid(checkBoardValid(gameBoard));
  };

  return (
    <div className='App'>
      <header>
        <h1>Sudoku</h1>
      </header>
      <div className='content'>
        <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
        <SudokuBoard boardValues={gameBoard} onUpdateBoard={updateBoard}></SudokuBoard>
        <div className='generate-buttons'>
          <h3>Generate:</h3>
          {mapEnum(Difficulties, (difficulty: string) => {
            return (
              <button
                key={difficulty}
                className={difficulty}
                onClick={() => {
                  getNewGameData(difficulty);
                }}
              >
                {difficulty}
              </button>
            );
          })}
          <button
            className='random'
            onClick={() => {
              getNewGameData(randomEnum(Difficulties).toLowerCase());
            }}
          >
            Random
          </button>
          <button
            onClick={() => {
              resetBoard();
            }}
          >
            Reset
          </button>
        </div>
        <div className='game-info'>
          <div className='info-item'>
            <button onClick={onCheckValid(gameBoard)}>{boardIsValid ? '✅' : '❌'} Valid?</button>
            <h3>{boardIsValid ? 'Yep' : 'Nope'}</h3>
          </div>
          <div className='info-item'>
            <h3>🎓 Difficulty:</h3>
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
      <footer>🐙</footer>
    </div>
  );
}

export default App;
