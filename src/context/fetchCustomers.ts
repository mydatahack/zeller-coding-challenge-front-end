import { Dispatch, SetStateAction } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import {
  ZellerCustomersQueryProps,
  ErrorProps,
} from './types';
import { ListZellerCustomersData } from '../types';
import { ListZellerCustomers } from '../graphql/queries';

import awsconfig from '../aws-exports.js';

Amplify.configure(awsconfig);

export const fetchCustomers = async (
  setCustomers: Dispatch<SetStateAction<ZellerCustomersQueryProps>>,
  setError: Dispatch<SetStateAction<ErrorProps>>,
): Promise<void> => {
  try {
    const customerData = await API.graphql(graphqlOperation(ListZellerCustomers));
    const customerList = (customerData as GraphQLResult<ListZellerCustomersData>)
      .data
      .listZellerCustomers
      .items;

    setCustomers(customerList);
  } catch (err) {
    // Todo: maybe need prevData pattern?
    setError({ error: true });
  }
};
