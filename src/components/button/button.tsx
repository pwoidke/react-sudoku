import React, { CSSProperties } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

export interface ButtonProps {
  text: string | Element;
  className?: string;
  onClickEvent: (e: React.MouseEvent | React.KeyboardEvent) => void;
  overrideStyle?: CSSProperties;
  disabled?: boolean;
  key?: string;
}

export function Button({
  text,
  className,
  onClickEvent,
  overrideStyle = {},
  disabled,
  key,
}: ButtonProps) {
  return (
    <div
      style={overrideStyle}
      role='button'
      className={classnames(styles.button, className, { disabled: disabled })}
      tabIndex={0}
      onClick={(e: React.MouseEvent) => {
        if (!disabled) {
          onClickEvent(e);
        }
      }}
      onKeyUp={(e: React.KeyboardEvent) => {
        if (!disabled && e.key === 'Enter') {
          onClickEvent(e);
        }
      }}
      key={key}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            minWidth: '28px',
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
