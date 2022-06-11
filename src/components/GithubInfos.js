import React, { useContext } from 'react';
import SearchContext from '../context/search-context';

import GithubInfo from './GithubInfo';
import LoadingSpinner from './ui/LoadingSpinner';
import Pagination from './ui/Pagination';

import styles from './GithubInfos.module.css';

const capitalize = str => {
  if (str === null) return;
  return str.split('')[0].toUpperCase() + str.substr(1);
};

const GithubInfos = props => {
  const searchCtx = useContext(SearchContext);

  return searchCtx.isLoading ? (
    <LoadingSpinner />
  ) : searchCtx.errorMessage ? (
    <p className={styles['error-message']}>{searchCtx.errorMessage}</p>
  ) : (
    <div className={`${styles['repo-container']} container grid grid--2-cols`}>
      {searchCtx.repoData.length > 0
        ? searchCtx.repoData.map(data => {
            return (
              <GithubInfo
                key={data.id}
                repoName={capitalize(data.name)}
                ownerName={capitalize(data.owner.login)}
                stars={data.stargazers_count}
                watchers={data.watchers}
                forks={data.forks}
                description={capitalize(data.description)}
                lastUpdatedDate={data.updated_at}
                repoData={data}
              />
            );
          })
        : ''}
      {searchCtx.repoData.length > 0 ? (
        <Pagination
          count={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default GithubInfos;
