import React from 'react';
import styles from './styles.scss';

export const HorizontalLine: React.VFC = () => {
  return <hr className={styles.horizontalLine} />
}

HorizontalLine.displayName = 'HorizontalLine';
