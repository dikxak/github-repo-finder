import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import RepoPageProvider from './context/RepoPageProvider';
import SearchQueryProvider from './context/SearchQueryProvider';
import SortOptionProvider from './context/SortOptionProvider';
import SearchPage from './pages/SearchPage';
import SearchResultPage from './pages/SearchResultPage';

const App = () => {
  return (
    <SortOptionProvider>
      <SearchQueryProvider>
        <Header />
        <RepoPageProvider>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/results" element={<SearchPage />} />
            <Route path="/results/page=:pageNum" element={<SearchPage />} />
            <Route path="/results/:repoName" element={<SearchResultPage />} />
          </Routes>
        </RepoPageProvider>
      </SearchQueryProvider>
    </SortOptionProvider>
  );
};

export default App;
