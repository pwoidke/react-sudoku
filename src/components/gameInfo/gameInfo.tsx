import { Button } from '../button/button';

import { Board } from '../../types/Board';

import styles from './gameInfo.module.scss';

export interface GameInfoProps {
  gameBoard: Board;
  selectedDifficulty: string;
  boardIsValid: boolean;
  onCheckValid: (gameBoard: Board) => void;
}

export function GameInfo({
  gameBoard,
  selectedDifficulty,
  boardIsValid,
  onCheckValid,
}: GameInfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <Button
          text={`${boardIsValid ? '✅' : '❌'} Valid?`}
          onClickEvent={() => {
            onCheckValid(gameBoard);
          }}
        ></Button>
        <h3>{boardIsValid ? 'Yep' : 'Nope'}</h3>
      </div>
      <div className={styles.item}>
        <h3>🎓 Difficulty:</h3>
        <p>{selectedDifficulty}</p>
      </div>
    </div>
  );
}
