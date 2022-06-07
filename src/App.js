import React from 'react';

import Header from './components/Header';
import SearchQueryProvider from './context/SearchQueryProvider';
import SortOptionProvider from './context/SortOptionProvider';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <SortOptionProvider>
      <SearchQueryProvider>
        <Header />
        <SearchPage />
      </SearchQueryProvider>
    </SortOptionProvider>
  );
};

export default App;
