import React from 'react';

const SearchContext = React.createContext({
  query: '',
  activePageNum: 1,
  isLoading: false,
  repoData: [],
  errorMessage: '',
  getRepoData: () => {},
  setActivePageNum: () => {},
});

export default SearchContext;
