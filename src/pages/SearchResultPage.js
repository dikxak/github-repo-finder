import React, { useContext, useState, useEffect } from 'react';

import RepoPageContext from '../context/repo-page-context';

import styles from './SearchResultPage.module.css';

const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();

const SearchResultPage = props => {
  const [markdownResult, setMarkdownResult] = useState('');

  const repoPageCtx = useContext(RepoPageContext);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/${repoPageCtx.repoPageData.full_name}/${repoPageCtx.repoPageData.default_branch}/README.md`
    )
      .then(res => {
        return res.text();
      })
      .then(data => {
        setMarkdownResult(`${data}`);
      })
      .catch(err => console.error(err));
  }, [
    repoPageCtx.repoPageData.full_name,
    repoPageCtx.repoPageData.default_branch,
  ]);

  return (
    <div className={`container ${styles['repo-detail-container']}`}>
      <h2>
        <a
          href={repoPageCtx.repoPageData.owner.html_url}
          target="_blank"
          rel="noreferrer"
          className={styles['full-owner-name']}
        >
          {repoPageCtx.repoPageData.full_name.split('/')[0]}
        </a>{' '}
        / &nbsp;
        <a
          href={repoPageCtx.repoPageData.clone_url}
          target="_blank"
          rel="noreferrer"
          className={styles['full-repo-name']}
        >
          {repoPageCtx.repoPageData.full_name.split('/')[1]}
        </a>
      </h2>
      <p className={styles['default-branch-name']}>
        Default branch: <span>{repoPageCtx.repoPageData.default_branch}</span>
      </p>
      <p className={styles['open-issues-num']}>
        Open issues: <span>{repoPageCtx.repoPageData.open_issues}</span>
      </p>

      <h2 className={styles['markdown-heading']}>README</h2>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: md.render(markdownResult) }}
      />
    </div>
  );
};

export default SearchResultPage;
