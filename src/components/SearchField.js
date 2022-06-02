import React from 'react';

import Button from './ui/Button';

import styles from './SearchField.module.css';

const SearchField = () => {
  return (
    <form className={`${styles['search']}`}>
      <input
        className={styles['search-input']}
        type="search"
        placeholder="Enter repository name to search..."
      />
      <Button className={styles['btn--submit']} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchField;
