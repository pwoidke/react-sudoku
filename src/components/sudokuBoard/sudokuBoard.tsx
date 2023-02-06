import { useContext } from 'react';

import { GameContext } from '../../game.context';
import { Cell } from '../cell/cell';

import styles from './sudokuBoard.module.scss';

export interface BoardProps {}

export function SudokuBoard() {
  const { boardHistory, historyIndex, updateBoard, providedValues } = useContext(GameContext);

  const updateBoardValues = (index: number, val: string) => {
    if (val) {
      console.log(`${index} ${val}`);
      updateBoard(boardHistory[historyIndex].replaceAt(index, val));
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {boardHistory[historyIndex] &&
          boardHistory[historyIndex].split('').map((value: string, index: number) => {
            return (
              <Cell
                index={index}
                value={value}
                key={index}
                updateBoardValues={updateBoardValues}
                provided={providedValues[index] !== '.'}
              ></Cell>
            );
          })}
      </div>
    </>
  );
}
