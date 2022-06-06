import React from 'react';

const SearchContext = React.createContext({
  isLoading: false,
  repoData: [],
  errorMessage: '',
  getRepoData: () => {},
});

export default SearchContext;
