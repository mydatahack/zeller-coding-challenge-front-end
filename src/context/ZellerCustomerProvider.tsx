import React, { createContext, useEffect, useState } from 'react';
import {
  ZellerCustomersQueryProps,
  UserTypeProps,
  ZellerCustomerProviderContextProps,
  ErrorProps,
} from './types';
import { fetchCustomers } from './fetchCustomers';
import { UserType } from '../enums';

const adminUserType: UserTypeProps = {
  userType: UserType.Admin,
};

export const ZellerCustomerContext = createContext<ZellerCustomerProviderContextProps>(undefined);

const { Provider } = ZellerCustomerContext;

export const ZellerCustomerContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<ZellerCustomersQueryProps>();
  const [userType, setUserType] = useState<UserTypeProps>();
  const [error, setError] = useState<ErrorProps>();
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    setUserType(adminUserType);
  }, []);

  useEffect(() => {
    fetchCustomers(setCustomers, setError, setFetched);
  }, []);

  const values = {
    customers,
    userType,
    setUserType,
    error,
    fetched,
  };

  return <Provider value={values}>{children}</Provider>;
};
