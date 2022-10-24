import React from 'react';
import css from './Phonebook.module.css';

export const Filter = ({ value, onChange }) => (
  <label className={css.labelField}>
    find contact by name:
    <input
      className={css.inputField}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

// export default Filter;
