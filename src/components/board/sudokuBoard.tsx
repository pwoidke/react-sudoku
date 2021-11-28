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

  return (
    <>
      <div className={styles.grid}>
        {boardValues &&
          Object.keys(boardValues).map((square: string, index: number) => {
            return (
              <Cell
                value={boardValues[square]}
                square={square}
                key={square}
                updateBoardValues={updateBoardValues}
              ></Cell>
            );
          })}
      </div>
    </>
  );
}
