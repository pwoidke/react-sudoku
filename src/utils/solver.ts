import { Board } from '../types/Board';

const solve = require('@mattflow/sudoku-solver');

export function checkSolution(board: Board): boolean {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let isValid = true;

  const checkSet = (set: string[]) => {
    return set.sort().toString() === '1,2,3,4,5,6,7,8,9';
  };

  // Check rows
  let set: string[];
  rows.forEach((row) => {
    set = [];
    cols.forEach((col) => {
      set.push(board[row + col] || '0');
    });

    isValid = isValid && checkSet(set);
  });

  // Check columns
  cols.forEach((col) => {
    set = [];
    rows.forEach((row) => {
      set.push(board[row + col] || '0');
    });

    isValid = isValid && checkSet(set);
  });

  // Check blocks
  set = [];
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      set = [
        board[rows[row] + cols[col]],
        board[rows[row + 1] + cols[col]],
        board[rows[row + 2] + cols[col]],

        board[rows[row] + cols[col + 1]],
        board[rows[row + 1] + cols[col + 1]],
        board[rows[row + 2] + cols[col + 1]],

        board[rows[row] + cols[col + 2]],
        board[rows[row + 1] + cols[col + 2]],
        board[rows[row + 2] + cols[col + 2]],
      ];
      isValid = isValid && checkSet(set);
    }
  }

  return isValid;
}

export function solveSudoku(gameBoard: Board): Board {
  var solverString = Object.values(gameBoard)
    .map((value) => parseInt(value || '0'))
    .join('');
  const solved = solve(solverString);
  const solvedValues = solved.split('');
  Object.keys(gameBoard).forEach((square, index) => {
    gameBoard[square] = solvedValues[index];
  });
  return gameBoard;
}
