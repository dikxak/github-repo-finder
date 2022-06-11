import React from 'react';

const RepoPageContext = React.createContext({
  repoPageData: [],
  getRepoPageData: data => {},
});

export default RepoPageContext;
