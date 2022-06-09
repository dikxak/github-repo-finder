import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SearchQueryProvider from './context/SearchQueryProvider';
import SortOptionProvider from './context/SortOptionProvider';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <SortOptionProvider>
      <SearchQueryProvider>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<SearchPage />} />
          <Route path="/results/page=:pageNum" element={<SearchPage />} />
        </Routes>
      </SearchQueryProvider>
    </SortOptionProvider>
  );
};

export default App;
