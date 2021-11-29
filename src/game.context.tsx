import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Board } from './types/index';
import { getNewGame } from './services/GameService';
import { Difficulties, checkBoardValid, copyByValue, deepCompare, emptyBoard } from './utils/index';

import 'react-toastify/dist/ReactToastify.css';

var store = require('store');

const defaultState = {
  selectedDifficulty: Difficulties.EASY,
  setSelectedDifficulty: () => {},
  gameBoard: emptyBoard,
  updateBoard: () => {},
  boardHistory: [],
  setBoardHistory: () => {},
  isLoading: false,
  boardIsValid: false,
  timeTravel: () => {},
  resetBoard: () => {},
  clearBoard: () => {},
  getNewGameData: () => {},
  onCheckValid: () => {},
  toast: toast,
};

export interface IGameContext {
  selectedDifficulty: string;
  setSelectedDifficulty: (selectedDifficulty: string) => void;
  gameBoard: Board;
  updateBoard: (board: Board) => void;
  boardHistory: Array<Board>;
  setBoardHistory: (boardHistory: Array<Board>) => void;
  isLoading: boolean;
  boardIsValid: boolean;
  timeTravel: (steps: number) => void;
  resetBoard: () => void;
  clearBoard: () => void;
  getNewGameData: (difficulty: string) => void;
  onCheckValid: (gameBoard: Board) => void;
  toast: any;
}

export const GameContext = createContext<IGameContext>(defaultState);

/* eslint-disable-next-line */
export interface GameContextProps {
  children?: any;
}

export function GameContextWrapper({ children }: GameContextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameBoard, setGameBoard] = useState<Board>(emptyBoard);
  const [initialBoard, setInitialBoard] = useState<Board>(emptyBoard);
  const [boardIsValid, setBoardIsValid] = useState(false);
  const [boardHistory, setBoardHistory] = useState<Array<Board>>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);

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
    updateBoard(emptyBoard);
  };

  const getNewGameData = (difficulty: string) => {
    if (!isLoading) {
      setIsLoading(true);
      getNewGame(difficulty)
        .then((gameData) => {
          if (gameData) {
            setSelectedDifficulty(gameData.difficulty);
            const newBoard = { ...emptyBoard, ...gameData.puzzle };
            setInitialBoard(copyByValue(newBoard));
            setBoardHistory([copyByValue(newBoard)]);
            updateBoard(copyByValue(newBoard));
          }
          setIsLoading(false);
        })
        .catch((error) => {
          toast.error(error);
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

  const provider = {
    selectedDifficulty,
    setSelectedDifficulty,
    gameBoard,
    updateBoard,
    boardHistory,
    setBoardHistory,
    isLoading,
    boardIsValid,
    timeTravel,
    toast,
    resetBoard,
    clearBoard,
    onCheckValid,
    getNewGameData,
  };

  return <GameContext.Provider value={provider}>{children}</GameContext.Provider>;
}
