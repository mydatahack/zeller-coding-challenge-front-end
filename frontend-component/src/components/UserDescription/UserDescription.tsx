import React from 'react';
import styles from './styles.scss';

export interface UserDescriptionProps {
  userName: string;
  role: string;
}

export const UserDescription: React.VFC<UserDescriptionProps> = ({ userName, role }) => (
  <div className={styles.userDescriptionContainer}>
    <span className={styles.userName}>{userName}</span>
    <span className={styles.userRole}>{role}</span>
  </div>
);

UserDescription.displayName = 'UserDescription';
