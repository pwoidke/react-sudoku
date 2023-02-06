import './strings';
import { copyByValue, emptyBoard } from '.';

// https://github.com/mattflow/sudoku-solver
const solve = require('@mattflow/sudoku-solver');

const hasValue = (val: string) => val !== '.';

export function checkBoardValid(board: string = emptyBoard): boolean {
  // if the board is empty, return true
  if (!board.split('').filter(hasValue).length) {
    return true;
  }

  const rows = board.chunk(9);
  const cols: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    cols.push(rows.map(row => row[i]).join(''));
  }

  let isValid = true;

  const checkSet = (set: string) => {
    // return set.sort().toString() === '1,2,3,4,5,6,7,8,9';
    const setArr = set.split('');
    return new Set(setArr.filter(hasValue)).size === setArr.filter(hasValue).length;
  };

  // Check rows
  rows.forEach((row) => {
    isValid = isValid && checkSet(row);
  });

  // Check columns
  cols.forEach((col) => {
    isValid = isValid && checkSet(col);
  });

  // Check blocks
  let sets: string[] = [];
  let lefts: string[] = [];
  let middles: string[] = [];
  let rights: string[] = [];

  rows.forEach((row) => {
    const [left, middle, right] = row.chunk(3);
    lefts.push(left);
    middles.push(middle);
    rights.push(right);
  });

  for (let i = 0; i < 9; i += 3) {
    sets.push(`${lefts[i]}${lefts[i + 1]}${lefts[i + 2]}`);
    sets.push(`${middles[i]}${middles[i + 1]}${middles[i + 2]}`);
    sets.push(`${rights[i]}${rights[i + 1]}${rights[i + 2]}`);
  }

  sets.forEach((set) => {
    isValid = isValid && checkSet(set);
  });
  
  return isValid;
}

export function checkBoardSolved(board: string): boolean {
  return checkBoardValid(board) && board.split('').filter(hasValue).join('').length === 81;
}

export function solveSudoku(board: string): string {
  const gameBoard: string = copyByValue(board);
  var solverString = gameBoard.split('')
    .map((value) => parseInt(value) || 0)
    .join('');
  let solved;
  solved = solve(solverString);
  const solvedValues = solved.split('');
  return solvedValues.map((value: number) => value === 0 ? '.' : value);
}
