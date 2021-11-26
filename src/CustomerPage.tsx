import React, { useContext } from 'react';
import { ZellerCustomerContext } from './context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from './context/types';
import { HorizontalLine } from '../frontend-component';
import { UserTypeSelector } from './components/UserTypeSelector';
import { UserInfoTable } from './components/UserInfoTable';

export const CustomerPage: React.FC = () => {
  const { customers } = useContext<ZellerCustomerProviderContextProps>(ZellerCustomerContext);

  return (
    <>
      <HorizontalLine />
      <UserTypeSelector />
      <HorizontalLine />
      <UserInfoTable />
      <HorizontalLine />
    </>
  );
};
