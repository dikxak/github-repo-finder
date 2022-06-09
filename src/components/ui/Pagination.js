import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import SearchContext from '../../context/search-context';

import styles from './Pagination.module.css';

const Pagination = props => {
  const searchCtx = useContext(SearchContext);

  const pageNumberChangeHandler = pageNum => {
    searchCtx.getRepoData(searchCtx.query, pageNum);
  };

  return (
    <ul className={styles['pagination-list']}>
      <NavLink
        className={styles['pagination-link']}
        to={`/results/page=${
          searchCtx.activePageNum <= 1 ? 1 : searchCtx.activePageNum - 1
        } `}
        onClick={_ => {
          if (searchCtx.activePageNum <= 1) {
            searchCtx.setActivePageNum(1);
            pageNumberChangeHandler(1);
          } else {
            searchCtx.setActivePageNum(searchCtx.activePageNum - 1);
            pageNumberChangeHandler(searchCtx.activePageNum - 1);
          }
        }}
      >
        {'<<'}
      </NavLink>
      {props.count.map(c => {
        return (
          <NavLink
            key={c}
            className={`${styles['pagination-link']} ${
              searchCtx.activePageNum === c ? styles.active : ''
            }`}
            to={`/results/page=${c}`}
            onClick={_ => {
              searchCtx.setActivePageNum(c);
              pageNumberChangeHandler(c);
            }}
          >
            {c}
          </NavLink>
        );
      })}
      <NavLink
        className={styles['pagination-link']}
        to={`/results/page=${
          searchCtx.activePageNum >= 15 ? 15 : searchCtx.activePageNum + 1
        }`}
        onClick={_ => {
          if (searchCtx.activePageNum >= 15) {
            searchCtx.setActivePageNum(15);
            pageNumberChangeHandler(15);
          } else {
            searchCtx.setActivePageNum(searchCtx.activePageNum + 1);
            pageNumberChangeHandler(searchCtx.activePageNum + 1);
          }
        }}
      >
        {'>>'}
      </NavLink>
    </ul>
  );
};

export default Pagination;
