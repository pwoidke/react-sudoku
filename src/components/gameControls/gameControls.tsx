import { CSSProperties, useContext } from 'react';
import classnames from 'classnames';

import { GameContext } from '../../game.context';
import { Button } from '../button/button';

import styles from './gameControls.module.scss';

export interface GameControlsProps {}

export function GameControls() {
  const { timeTravel, resetBoard, clearBoard, boardHistory, historyIndex } =
    useContext(GameContext);

  const styleOverrides: CSSProperties = {
    flex: '0 0 auto',
    width: 80,
  };

  return (
    <div className={styles.controls}>
      <div className={styles.time}>
        <Button
          className={classnames('button-undo', styles.button)}
          overrideStyle={{ ...styleOverrides, borderRadius: '10px 0 0 10px' }}
          onClickEvent={() => {
            timeTravel(-1);
          }}
          disabled={historyIndex < 1}
        >
          ⏪ Undo
        </Button>
        <Button
          className='button-redo'
          overrideStyle={{ ...styleOverrides, borderRadius: '0 10px 10px 0' }}
          onClickEvent={() => {
            timeTravel(1);
          }}
          disabled={boardHistory.length < 2 || historyIndex === boardHistory.length - 1}
        >
          ⏩ Redo
        </Button>
      </div>
      <Button
        overrideStyle={styleOverrides}
        onClickEvent={() => {
          resetBoard();
        }}
      >
        👋 Reset
      </Button>
      <Button
        overrideStyle={styleOverrides}
        onClickEvent={() => {
          clearBoard();
        }}
      >
        🧼 Clear
      </Button>
    </div>
  );
}
