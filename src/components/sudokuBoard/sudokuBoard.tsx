import '../../utils/strings'
import { useContext } from 'react';

import { GameContext } from '../../game.context';
import { Cell } from '../cell/cell';

import styles from './sudokuBoard.module.scss';

export interface BoardProps {}

export function SudokuBoard() {
  const { boardHistory, historyIndex, updateBoard, providedValues } = useContext(GameContext);

  const updateBoardValues = (position: number, val: string) => {
    if (val) {
      console.log(`${position} ${val}`);
      updateBoard(boardHistory[historyIndex].replaceAt(position, val));
    }
  };

  return (
    <>
      <div className={styles.grid}>
        {boardHistory[historyIndex] &&
          Object.keys(boardHistory[historyIndex]).map((square: string, index: number) => {
            return (
              <Cell
                value={boardHistory[historyIndex][square]}
                index={index}
                square={square}
                key={square}
                updateBoardValues={updateBoardValues}
                provided={providedValues.indexOf(square) > -1}
              ></Cell>
            );
          })}
      </div>
    </>
  );
}
