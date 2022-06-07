import React, { useState } from 'react';

import SortContext from './sort-context';

const SortOptionProvider = props => {
  const [option, setOption] = useState('');

  const getSortOption = option => {
    setOption(option);
  };

  const sortOptionContext = {
    sortOption: option,
    getSortOption,
  };

  return (
    <SortContext.Provider value={sortOptionContext}>
      {props.children}
    </SortContext.Provider>
  );
};

export default SortOptionProvider;
