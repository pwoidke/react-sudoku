import { useContext } from 'react';

import { GameContext } from '../../game.context';
import { Board } from '../../types/index';
import { Cell } from '../cell/cell';

import styles from './sudokuBoard.module.scss';

export interface BoardProps {}

export function SudokuBoard() {
  const { gameBoard, updateBoard } = useContext(GameContext);

  const updateBoardValues = (position: string, val: string) => {
    console.log(`${position} ${val}`);
    updateBoard({ ...gameBoard, [position]: val });
  };

  return (
    <>
      <div className={styles.grid}>
        {gameBoard &&
          Object.keys(gameBoard).map((square: string, index: number) => {
            return (
              <Cell
                value={gameBoard[square]}
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
