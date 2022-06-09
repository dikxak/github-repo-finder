import React from 'react';
import SearchField from '../components/SearchField';

import styles from './SearchPage.module.css';
import Select from '../components/ui/Select';
import GithubInfos from '../components/GithubInfos';

const SearchPage = () => {
  const options = [
    { label: 'Stars', value: 'stars' },
    { label: 'Forks', value: 'forks' },
  ];

  return (
    <div className={`container ${styles['search-container']}`}>
      <Select
        id="sort"
        label="Sort results by: "
        name="sort"
        options={options}
      />
      <SearchField />
      <GithubInfos />
    </div>
  );
};

export default SearchPage;
