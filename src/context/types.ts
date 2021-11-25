import { Dispatch, SetStateAction } from 'react';
import { ListZellerCustomersDataItem } from '../types';
import { Role } from '../enums';

export type ZellerCustomersQueryProps = ListZellerCustomersDataItem[];

export type UserTypeProps = {
  userType: Role;
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
