import * as React from 'react';

import { Board } from '../../types/Board';

import './sudokuBoard.module.scss';

export interface Props {
  boardValues?: Board;
}

export default function SudokuBoard({ boardValues }: Props) {
  // 9 rows x 9 cols
  // each cell has value or is input

  const gridSquare = (value: string | null) => {
    return <p key={Math.random()}>{value}</p>;
  };

  return (
    <>
      <h1>Board works</h1>
      <p>{JSON.stringify(boardValues)}</p>
      <div id='game-board'>
        {boardValues &&
          Object.keys(boardValues).map((square: string) => {
            //   return boardValues[square];
            return gridSquare(boardValues[square]);
          })}
      </div>
    </>
  );
}
