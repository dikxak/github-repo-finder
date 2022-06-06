import React from 'react';

import Header from './components/Header';
import SearchQueryProvider from './context/SearchQueryProvider';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <SearchQueryProvider>
      <Header />
      <SearchPage />
    </SearchQueryProvider>
  );
};

export default App;
