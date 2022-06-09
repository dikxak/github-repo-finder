import React, { useState, useContext } from 'react';

import SearchContext from './search-context';
import SortContext from './sort-context';

const resultPerPage = 20;
const timeoutSec = 10;

// If API request took more than defined time, it will return message.
const requestTimeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Requets took too long! Timeout after ${sec} seconds.`));
    }, sec * 1000);
  });
};

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

      const response = await Promise.race([
        fetch(
          `https://api.github.com/search/repositories?q=${q}&page=${pageNum}&per_page=${resultPerPage}${
            !sortCtx.sortOption ? '' : `&sort=${sortCtx.sortOption}`
          }`
        ),
        requestTimeout(timeoutSec),
      ]);

      if (!response.ok)
        throw new Error('Something went wrong 😔. Please try again 🔁');

      const data = await response.json();

      if (!data || !data.items) throw new Error('Could not fetch data!');

      setIsLoading(false);
      setErrorMessage('');
      setActivePageNum(pageNum);
      setRepositoriesData(data.items);
    } catch (err) {
      setIsLoading(false);
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
