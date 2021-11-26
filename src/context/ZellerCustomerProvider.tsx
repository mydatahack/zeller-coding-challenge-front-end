import React, { createContext, useEffect, useState } from 'react';
import {
  ZellerCustomersQueryProps,
  ZellerCustomerProviderContextProps,
} from './types';
import { fetchCustomers } from './fetchCustomers';
import { UserType } from '../enums';

export const ZellerCustomerContext = createContext<ZellerCustomerProviderContextProps>(undefined);

const { Provider } = ZellerCustomerContext;

export const ZellerCustomerContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<ZellerCustomersQueryProps>();
  const [userType, setUserType] = useState<UserType>();
  const [error, setError] = useState<boolean>();
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    setUserType(UserType.Admin);
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
