import React from 'react';

import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles['spinner']}></div>
    </div>
  );
};

export default LoadingSpinner;
