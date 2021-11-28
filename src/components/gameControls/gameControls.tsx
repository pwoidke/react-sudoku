import { Button } from '../button/button';

import styles from './gameControls.module.scss';

export interface GameControlsProps {
  timeTravel: (step: number) => void;
  resetBoard: () => void;
  clearBoard: () => void;
}

export function GameControls({ timeTravel, resetBoard, clearBoard }: GameControlsProps) {
  return (
    <div className={styles.controls}>
      <div className='time-travel-controls'>
        <Button
          text='⏪ Undo'
          className='button-undo'
          overrideStyle={{ borderRadius: '10px 0 0 10px' }}
          onClickEvent={() => {
            timeTravel(-1);
          }}
        ></Button>
        <Button
          text='⏩ Redo'
          className='button-redo'
          overrideStyle={{ borderRadius: '0 10px 10px 0' }}
          onClickEvent={() => {
            timeTravel(1);
          }}
        ></Button>
      </div>
      <Button
        text='👋 Reset'
        onClickEvent={() => {
          resetBoard();
        }}
      ></Button>
      <Button
        text='🧼 Clear'
        onClickEvent={() => {
          clearBoard();
        }}
      ></Button>
    </div>
  );
}
