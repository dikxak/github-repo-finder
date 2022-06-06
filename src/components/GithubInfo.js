import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import React from 'react';

import Star from './icons/Star';
import Fork from './icons/Fork';
import Eye from './icons/Eye';

import styles from './GithubInfo.module.css';

TimeAgo.addDefaultLocale(en);

const GithubInfo = props => {
  const timeAgo = new TimeAgo('en-US');

  return (
    <div className={styles['repo-card']}>
      <h2 className={styles['repo-title']}>{props.repoName}</h2>
      <h3 className={styles['repo-author']}>{props.ownerName}</h3>

      <div className={styles['repo-info-container']}>
        <div className={styles['repo-info']}>
          <Star />
          <p className={styles['repo-info-text']}>{props.stars} stars</p>
        </div>

        <div className={styles['repo-info']}>
          <Eye />
          <p className={styles['repo-info-text']}>{props.watchers} watching</p>
        </div>

        <div className={styles['repo-info']}>
          <Fork />
          <p className={styles['repo-info-text']}>{props.forks} forks</p>
        </div>
      </div>

      <p className={styles['repo-description']}>{props.description}</p>

      <p className={styles['repo-update']}>
        Last updated: {timeAgo.format(new Date(props.lastUpdatedDate))}
      </p>
    </div>
  );
};

export default GithubInfo;
