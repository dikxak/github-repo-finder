import React from 'react';

const SortContext = React.createContext({
  sortOption: '',
  getSortOption: () => {},
});

export default SortContext;
