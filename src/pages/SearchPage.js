import React from 'react';
import SearchField from '../components/SearchField';

import GithubInfos from '../components/GithubInfos';

import styles from './SearchPage.module.css';

const SearchPage = () => {
  return (
    <div className={`container ${styles['search-container']}`}>
      <SearchField />
      <GithubInfos />
    </div>
  );
};

export default SearchPage;
