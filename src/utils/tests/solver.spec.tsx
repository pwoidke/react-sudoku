import '../strings';
import { checkBoardSolved, checkBoardValid, solveSudoku } from '../solver';
import { emptyBoard, solvedBoard } from '../constants';

// 00 01 02 | 03 04 05 | 06 07 08
// 09 10 11 | 12 13 14 | 15 16 17
// 18 19 20 | 21 22 23 | 24 25 26
// --------------------------
// 27 28 29 | 30 31 32 | 33 34 35
// 36 37 38 | 39 40 41 | 42 43 44
// 45 46 47 | 48 49 50 | 51 52 53
// --------------------------
// 54 55 56 | 57 58 59 | 60 61 62
// 63 64 65 | 66 67 68 | 69 70 71
// 72 73 74 | 75 76 77 | 78 79 80

const invalidRowBoard: string = emptyBoard.replaceAt(0, '1');

const invalidColumnBoard: string = emptyBoard.replaceAt(0, '1').replaceAt(9, '1');

const invalidBlockBoard: string =  emptyBoard.replaceAt(0, '1').replaceAt(20, '1');

const validIncompleteBoard: string = emptyBoard.replaceAt(0, '1');

const invalidCompleteBoard: string = solvedBoard.replaceAt(0, '1').replaceAt(1, '1');

const validUnsolvedBoard: string = solvedBoard
  .replaceAt(0, '')
  .replaceAt(1, '')
  .replaceAt(2, '')
  .replaceAt(6, '')
  .replaceAt(8, '')
  .replaceAt(28, '')
  .replaceAt(11, '')
  .replaceAt(29, '')
  .replaceAt(65, '')
  .replaceAt(39, '')
  .replaceAt(57, '')
  .replaceAt(4, '')
  .replaceAt(22, '')
  .replaceAt(68, '')
  .replaceAt(77, '')
  .replaceAt(15, '')
  .replaceAt(51, '')
  .replaceAt(60, '')
  .replaceAt(7, '')
  .replaceAt(34, '')
  .replaceAt(43, '')
  .replaceAt(17, '')
  .replaceAt(44, '');

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
