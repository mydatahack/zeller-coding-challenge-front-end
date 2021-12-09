import { Dispatch, SetStateAction } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { ZellerCustomersQueryProps } from './types';
import { ListZellerCustomersData } from '../types';
import { ListZellerCustomers } from '../graphql/queries';

import awsconfig from '../aws-exports.js';

Amplify.configure(awsconfig);

export const fetchCustomers = async (
  setCustomers: Dispatch<SetStateAction<ZellerCustomersQueryProps>>,
  setError: Dispatch<SetStateAction<boolean>>,
  setFetched: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  try {
    // So that you can see how the loading state is implemented!
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const customerData = await API.graphql(graphqlOperation(ListZellerCustomers));
    const customerList = (customerData as GraphQLResult<ListZellerCustomersData>)
      .data
      .listZellerCustomers
      .items;

    setCustomers(customerList);
    setFetched(true);
  } catch (err) {
    // Even the endpoint is gone, the app still works! 🤟💀🤟
    await fetchCustomersFallback(setCustomers, setError, setFetched);
  }
};

const fallbackDataUrl = 'https://mydatahack.github.io/data/zeller/customer.json';

const fetchCustomersFallback = async (
  setCustomers: Dispatch<SetStateAction<ZellerCustomersQueryProps>>,
  setError: Dispatch<SetStateAction<boolean>>,
  setFetched: Dispatch<SetStateAction<boolean>>,
): Promise<void> => {
  try {
    const customerData = await (await fetch(fallbackDataUrl)).json();
    // console.log(`Yes, it's now fetched from my endpoint🤟💀🤟: ${JSON.stringify(customerData)}`);
    const customerList = (customerData as GraphQLResult<ListZellerCustomersData>)
      .data
      .listZellerCustomers
      .items;
    setCustomers(customerList);
    setFetched(true);
  } catch (err) {
    setError(true);
    setFetched(true);
  }
};
