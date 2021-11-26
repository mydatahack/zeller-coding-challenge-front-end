import React from 'react';
import styles from './styles.scss';
import { joinClassNames } from '../../utils';

export interface HorizontalLineProps {
  className?: string
};

export const HorizontalLine: React.VFC<HorizontalLineProps> = ({ className }) => {
  return <hr className={joinClassNames(styles.horizontalLine, className)} />
}

HorizontalLine.displayName = 'HorizontalLine';
