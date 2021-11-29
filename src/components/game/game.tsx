import { useContext } from 'react';
import { Controls, LoadingSpinner, SudokuBoard } from '../index';

import { GameContext } from '../../game.context';

export interface GameProps {}

export function Game() {
  const { isLoading, checkBoardValid, boardHistory, historyIndex } = useContext(GameContext);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {boardHistory[historyIndex] &&
        checkBoardValid(boardHistory[historyIndex]) &&
        Object.values(boardHistory[historyIndex]).join('').length === 81 && (
          <>
            <iframe
              title='Way to go!'
              src='https://giphy.com/embed/lFHtqqh6orvAhbiGmy'
              width='480'
              height='480'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
            <p>
              <a href='https://giphy.com/gifs/good-job-well-done-great-lFHtqqh6orvAhbiGmy'>
                via GIPHY
              </a>
            </p>
          </>
        )}
      <SudokuBoard></SudokuBoard>
      <Controls></Controls>
    </>
  );
}
