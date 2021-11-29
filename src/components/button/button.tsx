import React, { CSSProperties } from 'react';
import classnames from 'classnames';

import styles from './button.module.scss';

export interface ButtonProps {
  text?: string | Element;
  children?: React.ReactNode;
  className?: string;
  onClickEvent: (e: React.MouseEvent | React.KeyboardEvent) => void;
  overrideStyle?: CSSProperties;
  disabled?: boolean;
}

export function Button({
  text,
  children,
  className,
  onClickEvent,
  overrideStyle = {},
  disabled,
}: ButtonProps) {
  return (
    <div
      style={overrideStyle}
      role='button'
      className={classnames(styles.button, className, 'button', {
        [styles.disabled]: disabled,
        disabled: disabled,
      })}
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
          {children}
        </div>
      </div>
    </div>
  );
}
