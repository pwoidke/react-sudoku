import { CSSProperties, useContext } from 'react';
import { Button } from '../button/button';
import { GameControls } from '../gameControls/gameControls';
import { GameInfo } from '../gameInfo/gameInfo';
import { NewGameButtons } from '../newGameButtons/newGameButtons';

import { GameContext } from '../../game.context';
import { solveSudoku } from '../../utils/index';

import styles from './controls.module.scss';

export interface ControlsProps {}

export function Controls() {
  const { gameBoard, updateBoard, toast } = useContext(GameContext);

  const solveButtonOverrideStyles: CSSProperties = {
    padding: '10px 0',
    width: 498,
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 'x-large',
    fontFamily: 'monospace',
  };

  return (
    <div className={styles.controls}>
      <GameControls></GameControls>
      <NewGameButtons></NewGameButtons>
      <GameInfo></GameInfo>
      <Button
        className='button-solve'
        overrideStyle={solveButtonOverrideStyles}
        onClickEvent={() => {
          try {
            updateBoard(solveSudoku(gameBoard));
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
      >
        Solve
      </Button>
    </div>
  );
}
