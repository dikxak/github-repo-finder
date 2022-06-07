import React, { useState, useContext } from 'react';

import SearchContext from './search-context';
import SortContext from './sort-context';

const resultPerPage = 20;

const SearchQueryProvider = props => {
  const [repositoriesData, setRepositoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('');
  const [activePageNum, setActivePageNum] = useState(1);

  const sortCtx = useContext(SortContext);

  const getRepoData = async (q, pageNum = 1) => {
    try {
      if (q.length === 0) {
        throw new Error('Search field can not be empty!');
      }

      setQuery(q);
      setIsLoading(true);

      const response = await fetch(
        `https://api.github.com/search/repositories?q=${q}&page=${pageNum}&per_page=${resultPerPage}${
          !sortCtx.sortOption ? '' : `&sort=${sortCtx.sortOption}`
        }`
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

  const setActivePageNumHandler = page => {
    setActivePageNum(page);
  };

  const searchQueryContext = {
    query,
    activePageNum,
    isLoading,
    errorMessage,
    repoData: repositoriesData,
    getRepoData,
    setActivePageNum: setActivePageNumHandler,
  };

  return (
    <SearchContext.Provider value={searchQueryContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchQueryProvider;
