import { Board } from '../types/Board';

export function checkSolution(board: Board): boolean {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let isValid = true;

  const checkSet = (set: string[]) => {
    return set.sort().toString() === '1,2,3,4,5,6,7,8,9';
  };

  // rows (check all A#, B#, C#,...)
  let set: string[] = [];
  rows.forEach((row) => {
    cols.forEach((col) => {
      set.push(board[row + col] || '0');
    });

    isValid = isValid && checkSet(set);
  });
  // columns (check all d1, d2, d3,...)
  set = [];
  cols.forEach((col) => {
    rows.forEach((row) => {
      set.push(board[row + col] || '0');
    });

    isValid = isValid && checkSet(set);
  });
  set = [];
  // blocks (check all {A,B,C}{1,2,3},...)

  return isValid;
}
