import React from 'react';
import SearchField from '../components/SearchField';

import styles from './SearchPage.module.css';

const SearchPage = () => {
  return (
    <div className={`container ${styles['search-container']}`}>
      <SearchField />
    </div>
  );
};

export default SearchPage;
