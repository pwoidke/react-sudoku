import { useContext } from 'react';
import { Button } from '../button/button';

import { GameContext } from '../../game.context';

import styles from './gameInfo.module.scss';

export interface GameInfoProps {}

export function GameInfo() {
  const { onCheckValid, boardIsValid, gameBoard, selectedDifficulty } = useContext(GameContext);

  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <Button
          onClickEvent={() => {
            onCheckValid(gameBoard);
          }}
        >
          {boardIsValid ? '✅' : '❌'} Valid?
        </Button>
        <h3>{boardIsValid ? 'Yep' : 'Nope'}</h3>
      </div>
      <div className={styles.item}>
        <h3>🎓 Difficulty:</h3>
        <p>{selectedDifficulty}</p>
      </div>
    </div>
  );
}
