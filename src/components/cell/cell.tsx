// import classnames from 'classnames';

// import styles from './cell.module.scss';

export interface CellProps {
  value: string | null;
  key: string;
  updateBoardValues: (square: string, value: string) => void;
}

export function Cell({ value, key, updateBoardValues }: CellProps) {
  return (
    <div>
      <input
        type='number'
        min={1}
        max={9}
        key={key}
        value={value || ''}
        onChange={(e) => updateBoardValues(key, e.target.value)}
      ></input>
    </div>
  );
}
