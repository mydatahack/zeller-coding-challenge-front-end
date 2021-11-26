import { Dispatch, SetStateAction } from 'react';
import { ListZellerCustomersDataItem } from '../types';
import { UserType } from '../enums';

export type ZellerCustomersQueryProps = ListZellerCustomersDataItem[];

export type UserTypeProps = {
  userType: UserType;
}

export type ZellerCustomerProviderContextProps = {
  customers: ZellerCustomersQueryProps;
  userType: UserTypeProps;
  setUserType: Dispatch<SetStateAction<UserTypeProps>>;
  error: ErrorProps;
}

export type ErrorProps = {
  error: boolean;
}
