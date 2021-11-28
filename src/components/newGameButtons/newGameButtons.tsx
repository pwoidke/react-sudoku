import { Button } from '../button/button';

import { mapEnum, randomEnum } from '../../utils/enum';
import { Difficulties } from '../../utils/constants';

import styles from './newGameButtons.module.scss';
import { CSSProperties } from 'react';

export interface NewGameButtonsProps {
  getNewGameData: (difficulty: string) => void;
}

interface StyleOverrides {
  all: CSSProperties;
  easy: CSSProperties;
  medium: CSSProperties;
  hard: CSSProperties;
  random: CSSProperties;
}

export function NewGameButtons({ getNewGameData }: NewGameButtonsProps) {
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
      margin: '0 1em',
    },
  };

  return (
    <div className={styles.buttons}>
      <h3>Generate:</h3>
      {mapEnum(Difficulties, (difficulty: string) => {
        return (
          <Button
            key={difficulty}
            text={difficulty}
            // @ts-ignore
            overrideStyle={{ ...styleOverrides.all, ...styleOverrides[difficulty] }}
            className={difficulty}
            onClickEvent={() => {
              getNewGameData(difficulty);
            }}
          ></Button>
        );
      })}
      <Button
        text='🎲 Random'
        className='random'
        onClickEvent={() => {
          getNewGameData(randomEnum(Difficulties).toLowerCase());
        }}
      ></Button>
    </div>
  );
}
