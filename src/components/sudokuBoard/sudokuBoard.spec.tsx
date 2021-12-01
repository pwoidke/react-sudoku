import React from 'react';
import { render } from '@testing-library/react';
import { toast } from 'react-toastify';

import { GameContext, IGameContext } from '../../game.context';
import { SudokuBoard } from './sudokuBoard';
import { Difficulties } from '../../utils';

const defaultContext: IGameContext = {
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
  providedValues: [],
};

describe('SudokuBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SudokuBoard />);
    expect(baseElement).toBeTruthy();
  });
});

// Test the board is rendered with values

describe('SudokuBoard with data', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GameContext.Provider value={defaultContext}>
        <SudokuBoard />
      </GameContext.Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
