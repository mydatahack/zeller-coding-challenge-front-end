import React from 'react';
import { capitalise } from '../../utils';
import styles from './styles.scss';

export interface UserDescriptionProps {
  userName: string;
  userType: string;
}

export const UserDescription: React.VFC<UserDescriptionProps> = ({ userName, userType }) => (
  <div className={styles.userDescriptionContainer}>
    <span className={styles.userName}>{userName}</span>
    <span className={styles.userRole}>{capitalise(userType)}</span>
  </div>
);

UserDescription.displayName = 'UserDescription';
