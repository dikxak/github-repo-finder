import React, { useContext } from 'react';
import SearchContext from '../../context/search-context';

import styles from './Pagination.module.css';

const Pagination = props => {
  const searchCtx = useContext(SearchContext);

  const pageNumberChangeHandler = pageNum => {
    searchCtx.getRepoData(searchCtx.query, pageNum);
  };

  return (
    <ul className={styles['pagination-list']}>
      <a
        className={styles['pagination-link']}
        href="/"
        onClick={e => {
          e.preventDefault();
          pageNumberChangeHandler(searchCtx.activePageNum - 1);

          if (searchCtx.activePageNum === 1)
            searchCtx.setActivePageNum(searchCtx.activePageNum);
          else searchCtx.setActivePageNum(searchCtx.activePageNum - 1);
        }}
      >
        {'<<'}
      </a>
      {props.count.map(c => {
        return (
          <a
            key={c}
            className={`${styles['pagination-link']} ${
              searchCtx.activePageNum === c ? styles.active : ''
            }`}
            href="/"
            onClick={e => {
              e.preventDefault();
              searchCtx.setActivePageNum(c);
              pageNumberChangeHandler(c);
            }}
          >
            {c}
          </a>
        );
      })}
      <a
        className={styles['pagination-link']}
        href="/"
        onClick={e => {
          e.preventDefault();
          pageNumberChangeHandler(searchCtx.activePageNum + 1);

          if (searchCtx.activePageNum === 15)
            searchCtx.setActivePageNum(searchCtx.activePageNum);
          else searchCtx.setActivePageNum(searchCtx.activePageNum + 1);
        }}
      >
        {'>>'}
      </a>
    </ul>
  );
};

export default Pagination;
