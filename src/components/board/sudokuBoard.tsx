import classnames from 'classnames';

import { Board } from '../../types/Board';
import { Cell } from '../cell/cell';
import styles from './sudokuBoard.module.scss';

export interface BoardProps {
  boardValues: Board;
  onUpdateBoard: (board: Board) => void;
}

export function SudokuBoard({ boardValues, onUpdateBoard }: BoardProps) {
  const updateBoardValues = (position: string, val: string) => {
    console.log(`${position} ${val}`);
    boardValues[position] = val;

    onUpdateBoard(boardValues);
  };

  const gridSquare = (value: string | null, square: string) => {
    return (
      <div
        className={classnames(styles.cell, {
          [styles.row1]: square[0] === 'A',
          [styles.row2]: square[0] === 'B',
          [styles.row3]: square[0] === 'C',
          [styles.row4]: square[0] === 'D',
          [styles.row5]: square[0] === 'E',
          [styles.row6]: square[0] === 'F',
          [styles.row7]: square[0] === 'G',
          [styles.row8]: square[0] === 'H',
          [styles.row9]: square[0] === 'I',
          [styles.col1]: square[1] === '1',
          [styles.col2]: square[1] === '2',
          [styles.col3]: square[1] === '3',
          [styles.col4]: square[1] === '4',
          [styles.col5]: square[1] === '5',
          [styles.col6]: square[1] === '6',
          [styles.col7]: square[1] === '7',
          [styles.col8]: square[1] === '8',
          [styles.col9]: square[1] === '9',
        })}
        key={square}
      >
        <Cell value={value} key={square} updateBoardValues={updateBoardValues}></Cell>
      </div>
    );
  };

  return (
    <>
      <div className={styles.grid}>
        {boardValues &&
          Object.keys(boardValues).map((square: string) => {
            return gridSquare(boardValues[square], square);
          })}
      </div>
    </>
  );
}
