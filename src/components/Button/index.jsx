import React from 'react';
import styles from '../Button/index.module.css';

export const Button = ({ type, text, onClick, disabled }) => {
  return (
    <button
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.buttonStyle} ${
        disabled ? `${styles.disabledFalse}` : `${styles.disabledTrue}`
      }`}
    >
      {text}
    </button>
  );
};
