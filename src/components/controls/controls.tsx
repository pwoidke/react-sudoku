import { Button } from '../button/button';
import { GameControls } from '../gameControls/gameControls';
import { GameInfo } from '../gameInfo/gameInfo';
import { NewGameButtons } from '../newGameButtons/newGameButtons';

import { Board } from '../../types/Board';
import { solveSudoku } from '../../utils/solver';

import styles from './controls.module.scss';

export interface ControlsProps {
  gameBoard: Board;
  boardIsValid: boolean;
  selectedDifficulty: string;
  timeTravel: (step: number) => void;
  resetBoard: () => void;
  clearBoard: () => void;
  getNewGameData: (difficulty: string) => void;
  onCheckValid: (gameBoard: Board) => void;
  updateBoard: (gameBoard: Board) => void;
}

export function Controls({
  gameBoard,
  boardIsValid,
  selectedDifficulty,
  timeTravel,
  resetBoard,
  clearBoard,
  getNewGameData,
  onCheckValid,
  updateBoard,
}: ControlsProps) {
  return (
    <div className={styles.controls}>
      <GameControls
        timeTravel={timeTravel}
        resetBoard={resetBoard}
        clearBoard={clearBoard}
      ></GameControls>
      <NewGameButtons getNewGameData={getNewGameData}></NewGameButtons>
      <GameInfo
        gameBoard={gameBoard}
        selectedDifficulty={selectedDifficulty}
        boardIsValid={boardIsValid}
        onCheckValid={onCheckValid}
      ></GameInfo>
      <Button
        text='Solve this bad boy for me'
        className='button-solve'
        overrideStyle={{ width: 500 }}
        onClickEvent={() => {
          updateBoard(solveSudoku(gameBoard));
        }}
      ></Button>
    </div>
  );
}
