import { useContext } from 'react';
import classnames from 'classnames';

import { GameContext } from '../../game.context';

import styles from './gameInfo.module.scss';

export interface GameInfoProps {}

export function GameInfo() {
  const { checkBoardValid, boardHistory, historyIndex, selectedDifficulty } =
    useContext(GameContext);

  return (
    <div className={styles.info}>
      <div className={classnames(styles.item, 'info-item')}>
        <h3>{checkBoardValid(boardHistory[historyIndex]) ? '✅' : '❌'} Valid?</h3>
        <h3>{checkBoardValid(boardHistory[historyIndex]) ? 'Yep' : 'Nope'}</h3>
      </div>
      <div className={classnames(styles.item, 'info-item')}>
        <h3>🎓 Difficulty:</h3>
        <p>{selectedDifficulty}</p>
      </div>
    </div>
  );
}
