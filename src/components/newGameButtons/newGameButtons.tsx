import { CSSProperties, useContext } from 'react';
import { Button } from '../button/button';

import { GameContext } from '../../game.context';
import { Difficulties, mapEnum, randomEnum } from '../../utils';

import styles from './newGameButtons.module.scss';
import { Difficulty } from '../../types';

export interface NewGameButtonsProps {}

interface StyleOverrides {
  all: CSSProperties;
  easy: CSSProperties;
  medium: CSSProperties;
  hard: CSSProperties;
  random: CSSProperties;
}

export function NewGameButtons() {
  const { getNewGameData } = useContext(GameContext);

  const styleOverrides: StyleOverrides = {
    all: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    easy: {
      borderRadius: '10px 0 0 10px',
    },
    medium: {
      borderRadius: 0,
    },
    hard: {
      borderRadius: '0 10px 10px 0',
    },
    random: {
      marginLeft: '1em',
    },
  };

  return (
    <div className={styles.buttons}>
      <h3>Generate:</h3>
      {mapEnum(Difficulties, (difficulty: Difficulty) => {
        return (
          <Button
            key={difficulty}
            text={difficulty}
            overrideStyle={{ ...styleOverrides.all, ...styleOverrides[difficulty] }}
            className={difficulty}
            onClickEvent={() => {
              getNewGameData(difficulty);
            }}
          ></Button>
        );
      })}
      <Button
        className='random'
        overrideStyle={{ ...styleOverrides.all, ...styleOverrides.random }}
        onClickEvent={() => {
          getNewGameData(randomEnum(Difficulties));
        }}
      >
        🎲 Random
      </Button>
    </div>
  );
}
