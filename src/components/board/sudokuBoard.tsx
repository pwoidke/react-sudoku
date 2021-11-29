import { useContext } from 'react';

import { GameContext } from '../../game.context';
import { Cell } from '../cell/cell';

import styles from './sudokuBoard.module.scss';

export interface BoardProps {}

export function SudokuBoard() {
  const { boardHistory, historyIndex, updateBoard } = useContext(GameContext);

  const updateBoardValues = (position: string, val: string) => {
    console.log(`${position} ${val}`);
    updateBoard({ ...boardHistory[historyIndex], [position]: val });
  };

  return (
    <>
      <h1>{historyIndex}</h1>
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
              ></Cell>
            );
          })}
      </div>
    </>
  );
}
