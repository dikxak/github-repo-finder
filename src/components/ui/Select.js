import React, { useContext } from 'react';
import SortContext from '../../context/sort-context';

import styles from './Select.module.css';

const Select = props => {
  const sortCtx = useContext(SortContext);

  const optionChangeHandler = e => {
    sortCtx.getSortOption(e.target.value);
  };

  return (
    <div className={styles.control}>
      <label htmlFor={props.id}>{props.label}</label>

      <select onChange={optionChangeHandler} name={props.name} id={props.id}>
        <option selected={true} disabled hidden>
          Select one:
        </option>
        {props.options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
