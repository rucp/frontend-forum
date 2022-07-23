import React from 'react';
import styles from '../Input/index.module.css';

export const Input = ({ name, placeholder, onChange, type, value }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      className={styles.input}
      value={value}
    ></input>
  );
};
