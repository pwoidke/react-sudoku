import React, { useEffect, useState } from 'react';

import { Controls, SudokuBoard } from './components/index';
import { Board, emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { checkBoardValid } from './utils/solver';

import { Difficulties } from './utils/constants';
import { ToastContainer } from 'react-toastify';

import './App.css';

var store = require('store');

const copyByValue = (obj: Object) => JSON.parse(JSON.stringify(obj));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameBoard, setGameBoard] = useState<Board>(emptyBoard());
  const [initialBoard, setInitialBoard] = useState<Board>(emptyBoard());
  const [boardIsValid, setBoardIsValid] = useState(false);
  const [boardHistory, setBoardHistory] = useState<Array<Board>>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

  useEffect(() => {
    const savedDifficulty = store.get('difficulty');
    const savedBoardHistory = store.get('boardHistory');
    savedDifficulty && setSelectedDifficulty(savedDifficulty);
    savedBoardHistory && savedBoardHistory.length
      ? updateBoard(savedBoardHistory.pop())
      : getNewGameData(savedDifficulty ? savedDifficulty : selectedDifficulty);
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
  };

  const clearBoard = () => {
    updateBoard(emptyBoard());
  };

  const getNewGameData = (difficulty: string) => {
    if (!isLoading) {
      setIsLoading(true);
      getNewGame(difficulty).then((gameData) => {
        if (gameData) {
          setSelectedDifficulty(gameData.difficulty);
          const newBoard = { ...emptyBoard(), ...gameData.puzzle };
          setInitialBoard(copyByValue(newBoard));
          setBoardHistory([copyByValue(newBoard)]);
          updateBoard(copyByValue(newBoard));
        }
        setIsLoading(false);
      });
    }
  };

  const updateBoard = (updatedBoard: Board) => {
    if (JSON.stringify(updatedBoard) !== JSON.stringify(boardHistory[boardHistory.length - 1])) {
      updatedBoard && setBoardHistory([...boardHistory, copyByValue(gameBoard)]);
      updatedBoard && setGameBoard(copyByValue(updatedBoard));
    }
  };

  const onCheckValid = (gameBoard: Board) => (e: React.MouseEvent) => {
    setBoardIsValid(checkBoardValid(gameBoard));
  };

  const timeTravel = (steps: number) => {
    setGameBoard(
      boardHistory.length
        ? boardHistory[boardHistory.length + historyIndex + steps] || initialBoard
        : initialBoard
    );
    setHistoryIndex(historyIndex + steps);
  };

  return (
    <div className='App'>
      <header>
        <h1>Sudoku</h1>
      </header>
      <div className='content'>
        <ToastContainer position='top-center' autoClose={5000} closeOnClick pauseOnHover />
        <SudokuBoard boardValues={gameBoard} onUpdateBoard={updateBoard}></SudokuBoard>
        <Controls
          gameBoard={gameBoard}
          boardIsValid={boardIsValid}
          selectedDifficulty={selectedDifficulty}
          timeTravel={timeTravel}
          resetBoard={resetBoard}
          clearBoard={clearBoard}
          updateBoard={updateBoard}
          getNewGameData={getNewGameData}
          onCheckValid={onCheckValid}
        ></Controls>
      </div>
      <footer>🐙</footer>
    </div>
  );
}

export default App;
