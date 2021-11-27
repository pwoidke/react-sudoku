import * as React from 'react';

import { Board } from '../../types/Board';

import './board.module.scss';

export interface Props {
  boardValues: Board;
}

export default function SudokuBoard({ boardValues }: Props) {
  return (
    <>
      <h1>Board works</h1>
      <p>{JSON.stringify(boardValues)}</p>
    </>
  );
}
