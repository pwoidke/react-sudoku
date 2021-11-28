import classnames from 'classnames';

import { Board } from '../../types/Board';

import styles from './sudokuBoard.module.scss';

export interface Props {
  boardValues: Board;
  onUpdateBoard: (board: Board) => void;
}

export default function SudokuBoard({ boardValues, onUpdateBoard }: Props) {
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
        {/* {value ? (
          <span key={square} tabIndex={0}>
            {value}
          </span>
        ) : ( */}
        <input
          type='number'
          min='1'
          max='9'
          key={square}
          value={value || ''}
          onChange={(e) => updateBoardValues(square, e.target.value)}
        ></input>
        {/* )} */}
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
