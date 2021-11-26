import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { UserDescription, UserDescriptionProps } from '../UserDescription';
import { getFirstLetterInCapital } from '../../utils';
import styles from './styles.scss';

export interface UserTableProps {
  users: UserDescriptionProps[];
}
export const UserTable: React.VFC<UserTableProps> = ({ users }) => {

  return (
    <table>
      <tbody>
      {
        users.map(user => (
          <tr key={user.userName}>
            <td className={styles.td}>
              <UserAvatar
                userInitial={getFirstLetterInCapital(user.userName)}
                className={styles.infoSpacing}/>
              <UserDescription userName={user.userName} userType={user.userType} />
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}

UserTable.displayName = 'UserTable';
