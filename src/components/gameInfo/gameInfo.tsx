import { useContext } from 'react';
import classnames from 'classnames';

import { Button } from '../button/button';

import { GameContext } from '../../game.context';

import styles from './gameInfo.module.scss';

export interface GameInfoProps {}

export function GameInfo() {
  const { onCheckValid, boardIsValid, gameBoard, selectedDifficulty } = useContext(GameContext);

  return (
    <div className={styles.info}>
      <div className={classnames(styles.item, 'info-item')}>
        <Button
          onClickEvent={() => {
            onCheckValid(gameBoard);
          }}
        >
          {boardIsValid ? '✅' : '❌'} Valid?
        </Button>
        <h3>{boardIsValid ? 'Yep' : 'Nope'}</h3>
      </div>
      <div className={classnames(styles.item, 'info-item')}>
        <h3>🎓 Difficulty:</h3>
        <p>{selectedDifficulty}</p>
      </div>
    </div>
  );
}
