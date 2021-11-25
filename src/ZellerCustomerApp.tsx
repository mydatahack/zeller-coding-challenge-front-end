import React from 'react';
import { CustomerPage } from './CustomerPage';
import { ZellerCustomerContextProvider } from './context/ZellerCustomerProvider';

export const ZellerCustomerApp: React.FC = () => (
  <ZellerCustomerContextProvider>
    <CustomerPage />
  </ZellerCustomerContextProvider>
);
