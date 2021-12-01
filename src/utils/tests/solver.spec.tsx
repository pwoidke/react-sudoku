import { checkBoardSolved, checkBoardValid, solveSudoku } from '../solver';

import { emptyBoard, solvedBoard } from '../constants';
import { Board } from '../../types';

const invalidRowBoard: Board = {
  ...emptyBoard,
  A1: '1',
  A2: '1',
};

const invalidColumnBoard: Board = {
  ...emptyBoard,
  A1: '1',
  B1: '1',
};

const invalidBlockBoard: Board = {
  ...emptyBoard,
  A1: '1',
  C3: '1',
};

const validIncompleteBoard: Board = {
  ...emptyBoard,
  A1: '1',
};

const invalidCompleteBoard: Board = {
  ...solvedBoard,
  A1: '1',
  A2: '1',
};

const validUnsolvedBoard: Board = {
  ...solvedBoard,
  I5: '',
  E3: '',
  G6: '',
  A3: '',
  G2: '',
  C8: '',
  H1: '',
  E1: '',
  A2: '',
  F9: '',
  G7: '',
  D7: '',
  H5: '',
  F8: '',
  C4: '',
  I2: '',
  C2: '',
  D5: '',
  A7: '',
  A1: '',
  A9: '',
  H4: '',
  B4: '',
};

describe('checkBoardValid', () => {
  it('should check if given board is valid', () => {
    expect(checkBoardValid(emptyBoard)).toBe(true);
    expect(checkBoardValid(validUnsolvedBoard)).toBe(true);
    expect(checkBoardValid(solvedBoard)).toBe(true);
    expect(checkBoardValid(invalidRowBoard)).toBe(false);
    expect(checkBoardValid(invalidColumnBoard)).toBe(false);
    expect(checkBoardValid(invalidBlockBoard)).toBe(false);
  });
});

describe('checkBoardSolved', () => {
  it('should check if given board is solved', () => {
    expect(checkBoardSolved(emptyBoard)).toBe(false);
    expect(checkBoardSolved(validUnsolvedBoard)).toBe(false);
    expect(checkBoardSolved(solvedBoard)).toBe(true);
    expect(checkBoardSolved(invalidRowBoard)).toBe(false);
    expect(checkBoardSolved(invalidColumnBoard)).toBe(false);
    expect(checkBoardSolved(invalidBlockBoard)).toBe(false);
    expect(checkBoardSolved(validIncompleteBoard)).toBe(false);
    expect(checkBoardSolved(invalidCompleteBoard)).toBe(false);
  });
});

describe('solveSudoku', () => {
  it('should return a solved board if the board is valid and has at least 17 values', () => {
    expect(solveSudoku(validUnsolvedBoard)).toStrictEqual(solvedBoard);
    expect(solveSudoku(solvedBoard)).toStrictEqual(solvedBoard);
  });
});

describe('solveSudoku errors', () => {
  it('should throw an error for boards with fewer than 17 values', () => {
    const expectedErrorMessage = 'A valid puzzle must have at least 17 hints.';
    let actualErrorMessage;
    try {
      solveSudoku(emptyBoard);
    } catch (e: any) {
      actualErrorMessage = e.message;
    }
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
  });
});
