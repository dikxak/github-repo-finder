import React, { useState } from 'react';

import SearchContext from './search-context';

const SearchQueryProvider = props => {
  const [repositoriesData, setRepositoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getRepoData = async q => {
    try {
      if (q.length === 0) {
        throw new Error('Search field can not be empty!');
      }

      setIsLoading(true);

      const response = await fetch(
        `https://api.github.com/search/repositories?q=${q}`
      );
      const data = await response.json();

      if (!data) throw new Error('Could not fetch data!');

      setIsLoading(false);
      setErrorMessage('');
      setRepositoriesData(data.items);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const searchQueryContext = {
    isLoading,
    errorMessage,
    repoData: repositoriesData,
    getRepoData,
  };

  return (
    <SearchContext.Provider value={searchQueryContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchQueryProvider;
