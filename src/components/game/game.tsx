import { useContext } from 'react';
import { Controls, LoadingSpinner, SudokuBoard } from '..';

import { GameContext } from '../../game.context';

export interface GameProps {}

export function Game() {
  const { isLoading } = useContext(GameContext);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <SudokuBoard></SudokuBoard>
      <Controls></Controls>
    </>
  );
}
