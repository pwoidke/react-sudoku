import { CSSProperties } from 'react';
import classnames from 'classnames';

import { Button } from '../button/button';

import styles from './gameControls.module.scss';

export interface GameControlsProps {
  timeTravel: (step: number) => void;
  resetBoard: () => void;
  clearBoard: () => void;
}

export function GameControls({ timeTravel, resetBoard, clearBoard }: GameControlsProps) {
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
        >
          ⏪ Undo
        </Button>
        <Button
          className='button-redo'
          overrideStyle={{ ...styleOverrides, borderRadius: '0 10px 10px 0' }}
          onClickEvent={() => {
            timeTravel(1);
          }}
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
