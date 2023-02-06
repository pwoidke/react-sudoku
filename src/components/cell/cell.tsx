import { useRef } from 'react';
import classnames from 'classnames';

import styles from './cell.module.scss';

export interface CellProps {
  value: string;
  index: number;
  square: string;
  updateBoardValues: (index: number, value: string) => void;
  provided: boolean;
}

export function Cell({
  value = '',
  index,
  square,
  updateBoardValues,
  provided = false,
}: CellProps) {
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
      className={classnames(styles.cell, 'cell')}
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
        className={classnames({ [styles.provided]: provided })}
        type='number'
        min={1}
        max={9}
        defaultValue={value}
        readOnly={provided}
        key={`${square}${value}`}
        ref={inputCell}
        inputMode='decimal'
        onBlur={(e) => updateBoardValues(index, e.target.value)}
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
