import { useContext } from 'react';
import { css } from '@emotion/react';

import { GameContext } from '../../game.context';
import GridLoader from 'react-spinners/GridLoader';

import styles from './loadingSpinner.module.scss';

export interface LoadingSpinnerProps {}

export function LoadingSpinner() {
  const { isLoading } = useContext(GameContext);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return isLoading ? (
    <div className='loading-scrim'>
      <GridLoader color='#ff3bf4' css={override} loading={isLoading} size={75} />
      <div className={styles.visuallyHidden}>Loading...</div>
    </div>
  ) : null;
}
