import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';

import { Controls, SudokuBoard } from './components/index';
import { Board, emptyBoard } from './types/Board';
import { getNewGame } from './services/GameService';
import { Difficulties, checkBoardValid, copyByValue, deepCompare } from './utils/index';

import './App.css';

var store = require('store');

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameBoard, setGameBoard] = useState<Board>(emptyBoard());
  const [initialBoard, setInitialBoard] = useState<Board>(emptyBoard());
  const [boardIsValid, setBoardIsValid] = useState(false);
  const [boardHistory, setBoardHistory] = useState<Array<Board>>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  useEffect(() => {
    const savedDifficulty = store.get('difficulty');
    const savedBoardHistory = store.get('boardHistory');
    if (savedDifficulty && savedBoardHistory && savedBoardHistory.length) {
      setSelectedDifficulty(savedDifficulty);
      updateBoard(savedBoardHistory.pop());
    } else {
      getNewGameData(selectedDifficulty);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    store.set('difficulty', selectedDifficulty);
  }, [selectedDifficulty]);

  useEffect(() => {
    setBoardIsValid(checkBoardValid(gameBoard));
  }, [gameBoard]);

  useEffect(() => {
    if (boardHistory.length) {
      Object.values(boardHistory[boardHistory.length - 1]).join('').length &&
        store.set('boardHistory', boardHistory);
    }
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
    if (deepCompare(updatedBoard, boardHistory[boardHistory.length - 1])) {
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
        ? boardHistory[boardHistory.length + historyIndex + steps] ||
            boardHistory[boardHistory.length - 1]
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
        {isLoading && (
          <div className='loading-scrim'>
            <GridLoader color='#ff3bf4' css={override} loading={isLoading} size={75} />
          </div>
        )}
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
      <footer>
        <a href='https://github.com/pwoidke/react-sudoku' target='_blank' rel='noreferrer'>
          🐙
        </a>
      </footer>
    </div>
  );
}

export default App;
