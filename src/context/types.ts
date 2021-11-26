import { Dispatch, SetStateAction } from 'react';
import { ListZellerCustomersDataItem } from '../types';
import { UserType } from '../enums';

export type ZellerCustomersQueryProps = ListZellerCustomersDataItem[];

export type ZellerCustomerProviderContextProps = {
  customers: ZellerCustomersQueryProps;
  userType: UserType;
  setUserType: Dispatch<SetStateAction<UserType>>;
  error: boolean;
  fetched: boolean;
}
