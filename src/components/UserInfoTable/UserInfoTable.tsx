import React, { useContext } from 'react';
import { ZellerCustomerContext } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { Heading, UserTable } from '../../../frontend-component';

export const UserInfoTable: React.VFC = () => {
  const { userType: contextUserType } = useContext<ZellerCustomerProviderContextProps>(
    ZellerCustomerContext,
  );
  const { customers } = useContext<ZellerCustomerProviderContextProps>(ZellerCustomerContext);

  const users = (customers || [])
    .filter(
      (customer) => customer?.role?.toLowerCase() === contextUserType?.userType?.toLowerCase(),
    )
    .map((customer) => ({ userName: customer?.name, userType: customer?.role }));

  return (
    <>
      <Heading level={2}>Admin User</Heading>
      {users && <UserTable users={users} />}
    </>
  );
};
