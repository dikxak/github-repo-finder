import React, { useState } from 'react';

import RepoPageContext from './repo-page-context';

const RepoPageProvider = props => {
  const [repoPageData, setRepoPageData] = useState('');

  const getRepoPageData = data => {
    setRepoPageData(data);
  };

  const repoPageContext = {
    repoPageData,
    getRepoPageData,
  };

  return (
    <RepoPageContext.Provider value={repoPageContext}>
      {props.children}
    </RepoPageContext.Provider>
  );
};

export default RepoPageProvider;
