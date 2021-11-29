import { useRef } from 'react';
import classnames from 'classnames';

import styles from './cell.module.scss';

export interface CellProps {
  value: string | null;
  index: number;
  square: string;
  updateBoardValues: (square: string, value: string) => void;
}

export function Cell({ value, index, square, updateBoardValues }: CellProps) {
  const inputCell = useRef(null);
  const cellContainer = useRef(null);

  const returnFocus = () => {
    // @ts-ignore
    cellContainer.current && cellContainer.current.focus();
  };
  const setInputFocus = () => {
    // @ts-ignore
    inputCell.current && inputCell.current.focus();
  };

  const setFocusToCell = (cellIndex: number) => {
    const targetCell = document.getElementById(`cell-${cellIndex}`);
    targetCell && targetCell.focus();
  };

  const setFocusRight = () => {
    setFocusToCell(index + 1);
  };

  const setFocusLeft = () => {
    setFocusToCell(index - 1);
  };

  const setFocusDown = () => {
    setFocusToCell(index + 9);
  };

  const setFocusUp = () => {
    setFocusToCell(index - 9);
  };

  return (
    <div
      id={`cell-${index}`}
      className={classnames(styles.cell, 'cell', {
        [styles.row1]: square[0] === 'A',
        row1: square[0] === 'A',
        [styles.row2]: square[0] === 'B',
        row2: square[0] === 'B',
        [styles.row3]: square[0] === 'C',
        row3: square[0] === 'C',
        [styles.row4]: square[0] === 'D',
        row4: square[0] === 'D',
        [styles.row5]: square[0] === 'E',
        row5: square[0] === 'E',
        [styles.row6]: square[0] === 'F',
        row6: square[0] === 'F',
        [styles.row7]: square[0] === 'G',
        row7: square[0] === 'G',
        [styles.row8]: square[0] === 'H',
        row8: square[0] === 'H',
        [styles.row9]: square[0] === 'I',
        row9: square[0] === 'I',
        [styles.col1]: square[1] === '1',
        col1: square[1] === '1',
        [styles.col2]: square[1] === '2',
        col2: square[1] === '2',
        [styles.col3]: square[1] === '3',
        col3: square[1] === '3',
        [styles.col4]: square[1] === '4',
        col4: square[1] === '4',
        [styles.col5]: square[1] === '5',
        col5: square[1] === '5',
        [styles.col6]: square[1] === '6',
        col6: square[1] === '6',
        [styles.col7]: square[1] === '7',
        col7: square[1] === '7',
        [styles.col8]: square[1] === '8',
        col8: square[1] === '8',
        [styles.col9]: square[1] === '9',
        col9: square[1] === '9',
      })}
      tabIndex={0}
      ref={cellContainer}
      onKeyUp={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          setInputFocus();
        } else if (e.key === 'ArrowRight') {
          setFocusRight();
        } else if (e.key === 'ArrowLeft') {
          setFocusLeft();
        } else if (e.key === 'ArrowUp') {
          setFocusUp();
        } else if (e.key === 'ArrowDown') {
          setFocusDown();
        }
      }}
    >
      <input
        type='number'
        min={1}
        max={9}
        defaultValue={value || ''}
        ref={inputCell}
        inputMode='decimal'
        pattern='[1-9]{1}'
        onBlur={(e) => updateBoardValues(square, e.target.value)}
        onKeyUp={(e: React.KeyboardEvent) => {
          e.stopPropagation();
          if (e.key === 'Enter') {
            // @ts-ignore
            updateBoardValues(square, e.target.value);
            returnFocus();
          }
        }}
      ></input>
    </div>
  );
}
