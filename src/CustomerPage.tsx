import React, { useContext } from 'react';
import { ZellerCustomerContext } from './context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from './context/types';

export const CustomerPage: React.FC = () => {
  const { customers } = useContext<ZellerCustomerProviderContextProps>(ZellerCustomerContext);

  return (
    <>
      <p>Yes yes working!!! </p>
      <p>{JSON.stringify(customers)}</p>
    </>
  );
};
