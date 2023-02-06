import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Difficulty } from './types';
import { getNewGame } from './services/GameService';
import { Difficulties, checkBoardSolved, checkBoardValid, deepDiff, emptyBoard } from './utils';

import 'react-toastify/dist/ReactToastify.css';

var store = require('store');

const defaultState = {
  isLoading: false,
  selectedDifficulty: Difficulties.EASY,
  boardHistory: [],
  historyIndex: 0,
  updateBoard: () => {},
  getNewGameData: () => {},
  resetBoard: () => {},
  clearBoard: () => {},
  checkBoardValid: () => false,
  timeTravel: () => {},
  toast: toast,
  providedValues: emptyBoard,
};

export interface IGameContext {
  isLoading: boolean;
  selectedDifficulty: string;
  boardHistory: string[];
  historyIndex: number;
  updateBoard: (board: string) => void;
  getNewGameData: (difficulty: Difficulty) => void;
  resetBoard: () => void;
  clearBoard: () => void;
  checkBoardValid: (board: string) => boolean;
  timeTravel: (steps: number) => void;
  toast: any;
  providedValues: string;
}

export const GameContext = createContext<IGameContext>(defaultState);

export interface GameContextProps {
  children?: any;
}

export function GameContextWrapper({ children }: GameContextProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(Difficulties.EASY);
  const [boardHistory, setBoardHistory] = useState<string[]>([emptyBoard]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [providedValues, setProvidedValues] = useState<string>(emptyBoard);

  useEffect(() => {
    const savedDifficulty = store.get('difficulty');
    const savedBoardHistory = store.get('boardHistory');
    const savedHistoryIndex = store.get('historyIndex');
    const savedProvidedValues = store.get('providedValues');
    if (
      savedDifficulty &&
      savedBoardHistory &&
      savedHistoryIndex &&
      savedProvidedValues &&
      !checkBoardSolved(savedBoardHistory[savedHistoryIndex])
    ) {
      setSelectedDifficulty(savedDifficulty);
      setBoardHistory(savedBoardHistory);
      setHistoryIndex(savedHistoryIndex);
      setProvidedValues(savedProvidedValues);
    } else {
      getNewGameData(selectedDifficulty);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    store.set('providedValues', providedValues);
  }, [providedValues]);

  useEffect(() => {
    store.set('difficulty', selectedDifficulty);
  }, [selectedDifficulty]);

  useEffect(() => {
    if (checkBoardSolved(boardHistory[historyIndex])) {
      toast.info(
        <iframe
          title='Way to go!'
          src='https://giphy.com/embed/lFHtqqh6orvAhbiGmy'
          width='480'
          height='480'
          frameBorder='0'
          className='giphy-embed'
        ></iframe>,
        { autoClose: 3000, closeOnClick: true, pauseOnHover: false }
      );
    }
    store.set('historyIndex', historyIndex);
    // eslint-disable-next-line
  }, [historyIndex]);

  useEffect(() => {
    store.set('boardHistory', boardHistory);
    setHistoryIndex(boardHistory.length - 1);
  }, [boardHistory]);

  const updateBoard = (board: string, history: string[] = boardHistory) => {
    toast.dismiss();
    if (deepDiff(board, boardHistory[historyIndex])) {
      setBoardHistory([...history.slice(0, historyIndex + 1), board]);
    }
  };

  const resetBoard = () => {
    setHistoryIndex(1);
  };

  const clearBoard = () => {
    setHistoryIndex(0);
  };

  const getNewGameData = (difficulty: Difficulty) => {
    if (!isLoading) {
      toast.dismiss();
      setIsLoading(true);
      getNewGame(difficulty)
        .then((gameData) => {
          if (gameData) {
            setSelectedDifficulty(gameData.difficulty);
            setProvidedValues(gameData.puzzle);
            const newBoard = gameData.puzzle;
            updateBoard(newBoard, [emptyBoard]);
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
      setHistoryIndex(newIndex);
    }
  };

  const provider = {
    isLoading,
    selectedDifficulty,
    boardHistory,
    historyIndex,
    updateBoard,
    getNewGameData,
    resetBoard,
    clearBoard,
    checkBoardValid,
    timeTravel,
    toast,
    providedValues,
  };

  return <GameContext.Provider value={provider}>{children}</GameContext.Provider>;
}
