import { css } from '@emotion/react';
import GridLoader from 'react-spinners/GridLoader';

import styles from './loadingSpinner.module.scss';

export interface LoadingSpinnerProps {
  isLoading: boolean;
}

export function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return isLoading ? (
    <div className='loading-scrim'>
      <GridLoader color='#ff3bf4' css={override} loading={isLoading} size={75} />
    </div>
  ) : null;
}
