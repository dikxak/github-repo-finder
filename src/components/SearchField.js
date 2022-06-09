import React, { useState, useContext, useRef, useEffect } from 'react';

import Button from './ui/Button';

import { useNavigate } from 'react-router-dom';

import styles from './SearchField.module.css';
import SearchContext from '../context/search-context';

const SearchField = () => {
  const [enteredQuery, setEnteredQuery] = useState('');
  const searchFieldRef = useRef();
  const searchQueryCtx = useContext(SearchContext);

  const navigate = useNavigate();

  useEffect(() => {
    searchFieldRef.current.focus();
  }, []);

  const searchQueryChangeHandler = e => {
    setEnteredQuery(e.target.value);
  };

  const querySubmitHandler = e => {
    e.preventDefault();
    searchQueryCtx.getRepoData(enteredQuery);

    setEnteredQuery('');
    navigate('/results');
  };

  return (
    <form onSubmit={querySubmitHandler} className={`${styles['search']}`}>
      <input
        ref={searchFieldRef}
        className={styles['search-input']}
        type="search"
        placeholder="Enter repository name to search..."
        onChange={searchQueryChangeHandler}
        value={enteredQuery}
      />
      <Button
        onSubmit={searchQueryCtx.querySubmitHandler}
        className={styles['btn--submit']}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchField;
