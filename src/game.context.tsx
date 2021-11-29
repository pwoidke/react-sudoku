import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Board } from './types/index';
import { getNewGame } from './services/GameService';
import { Difficulties, checkBoardValid, copyByValue, deepDiff, emptyBoard } from './utils/index';

import 'react-toastify/dist/ReactToastify.css';

var store = require('store');

const defaultState = {
  setGameBoard: () => {},
  getNewGameData: () => {},
  selectedDifficulty: Difficulties.EASY,
  boardHistory: [],
  historyIndex: 0,
  resetBoard: () => {},
  clearBoard: () => {},
  checkBoardValid: () => false,
  timeTravel: () => {},
  isLoading: false,
  toast: toast,
};

export interface IGameContext {
  setGameBoard: (board: Board) => void;
  getNewGameData: (difficulty: string) => void;
  selectedDifficulty: string;
  boardHistory: Array<Board>;
  historyIndex: number;
  resetBoard: () => void;
  clearBoard: () => void;
  checkBoardValid: (board: Board) => boolean;
  timeTravel: (steps: number) => void;
  isLoading: boolean;
  toast: any;
}

export const GameContext = createContext<IGameContext>(defaultState);

/* eslint-disable-next-line */
export interface GameContextProps {
  children?: any;
}

export function GameContextWrapper({ children }: GameContextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [gameBoard, setGameBoard] = useState<Board>(emptyBoard);
  const [boardHistory, setBoardHistory] = useState<Array<Board>>([emptyBoard]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

  useEffect(() => {
    const savedDifficulty = store.get('difficulty');
    const savedBoardHistory = store.get('boardHistory');
    if (savedDifficulty && savedBoardHistory && savedBoardHistory.length) {
      setSelectedDifficulty(savedDifficulty);
      setGameBoard(savedBoardHistory.pop());
    } else {
      getNewGameData(selectedDifficulty);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    store.set('difficulty', selectedDifficulty);
  }, [selectedDifficulty]);

  useEffect(() => {
    store.set('boardHistory', boardHistory);
    setHistoryIndex(boardHistory.length - 1);
  }, [boardHistory]);

  useEffect(() => {
    // IF the board is not empty
    // And it's the first board
    // Or the updated board is different than the last saved state
    // Then add the updated board to the history
    if (deepDiff(gameBoard, boardHistory[boardHistory.length - 1])) {
      setBoardHistory([...copyByValue(boardHistory), copyByValue(gameBoard)]);
    }
    // eslint-disable-next-line
  }, [gameBoard]);

  const resetBoard = () => {
    setGameBoard(copyByValue(boardHistory[1]));
  };

  const clearBoard = () => {
    setGameBoard(copyByValue(boardHistory[0]));
  };

  const getNewGameData = (difficulty: string) => {
    if (!isLoading) {
      setIsLoading(true);
      getNewGame(difficulty)
        .then((gameData) => {
          if (gameData) {
            setSelectedDifficulty(gameData.difficulty);
            const newBoard = { ...emptyBoard, ...gameData.puzzle };
            store.remove('boardHistory');
            setGameBoard(copyByValue(newBoard));
          }
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  const timeTravel = (steps: number) => {
    const newIndex = historyIndex + steps;
    if (newIndex > -1 && newIndex < boardHistory.length) {
      setGameBoard(copyByValue(boardHistory[newIndex]));
      setHistoryIndex(newIndex);
    }
  };

  const provider = {
    setGameBoard,
    getNewGameData,
    selectedDifficulty,
    boardHistory,
    historyIndex,
    resetBoard,
    clearBoard,
    checkBoardValid,
    timeTravel,
    isLoading,
    toast,
  };

  return <GameContext.Provider value={provider}>{children}</GameContext.Provider>;
}
