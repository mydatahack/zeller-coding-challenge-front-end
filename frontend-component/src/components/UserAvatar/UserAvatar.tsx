import React from 'react';
import { joinClassNames } from '../../utils';
import styles from './styles.scss';

export interface UserAvatarProps {
  userInitial: string;
  className?: string;
}

export const UserAvatar: React.VFC<UserAvatarProps> = ({ userInitial, className }) => (
  <div className={joinClassNames(styles.avatarContainer, className)}>
    <span className={styles.userInitial}>{userInitial}</span>
  </div>
);

UserAvatar.displayName = 'UserAvatar';
