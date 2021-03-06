import { copyByValue, emptyBoard } from '.';
import { Board } from '../types';

// https://github.com/mattflow/sudoku-solver
const solve = require('@mattflow/sudoku-solver');

export function checkBoardValid(board: Board = emptyBoard): boolean {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let isValid = true;

  const checkSet = (set: Array<string>) => {
    // return set.sort().toString() === '1,2,3,4,5,6,7,8,9';
    return new Set(set.filter((val) => val.length)).size === set.filter((val) => val.length).length;
  };

  // Check rows
  let set: Array<string>;
  rows.forEach((row) => {
    set = [];
    cols.forEach((col) => {
      set.push(board[row + col] || '');
    });

    isValid = isValid && checkSet(set);
  });

  // Check columns
  cols.forEach((col) => {
    set = [];
    rows.forEach((row) => {
      set.push(board[row + col] || '');
    });

    isValid = isValid && checkSet(set);
  });

  // Check blocks
  set = [];
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      set = [
        board[rows[row] + cols[col]] || '',
        board[rows[row + 1] + cols[col]] || '',
        board[rows[row + 2] + cols[col]] || '',

        board[rows[row] + cols[col + 1]] || '',
        board[rows[row + 1] + cols[col + 1]] || '',
        board[rows[row + 2] + cols[col + 1]] || '',

        board[rows[row] + cols[col + 2]] || '',
        board[rows[row + 1] + cols[col + 2]] || '',
        board[rows[row + 2] + cols[col + 2]] || '',
      ];
      isValid = isValid && checkSet(set);
    }
  }

  return isValid;
}

export function checkBoardSolved(board: Board): boolean {
  return checkBoardValid(board) && Object.values(board).join('').length === 81;
}

export function solveSudoku(board: Board): Board {
  const gameBoard: Board = copyByValue(board);
  var solverString = Object.values(gameBoard)
    .map((value) => parseInt(value || '0'))
    .join('');
  let solved;
  solved = solve(solverString);
  const solvedValues = solved.split('');
  Object.keys(gameBoard).forEach((square, index) => {
    gameBoard[square] = solvedValues[index];
  });

  return gameBoard;
}
