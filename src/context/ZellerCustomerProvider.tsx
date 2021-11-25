import React, { createContext, useEffect, useState } from 'react';
import {
  ZellerCustomersQueryProps,
  UserTypeProps,
  ZellerCustomerProviderContextProps,
  ErrorProps,
} from './types';
import { fetchCustomers } from './fetchCustomers';
import { Role } from '../enums';

const adminUserType: UserTypeProps = {
  userType: Role.Admin,
};

export const ZellerCustomerContext = createContext<ZellerCustomerProviderContextProps>(undefined);

const { Provider } = ZellerCustomerContext;

export const ZellerCustomerContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<ZellerCustomersQueryProps>();
  const [userType, setUserType] = useState<UserTypeProps>();
  const [error, setError] = useState<ErrorProps>();

  useEffect(() => {
    setUserType(adminUserType);
  }, []);

  useEffect(() => {
    fetchCustomers(setCustomers, setError);
  }, []);

  const values = {
    customers,
    userType,
    setUserType,
    error,
  };

  return <Provider value={values}>{children}</Provider>;
};
