import { UserType } from '../enums';
import { ListZellerCustomersDataItem } from '../types';

export const mockCustomerData: ListZellerCustomersDataItem[] = [
  {
    email: 'lynn@gmail.com',
    id: 'f47813cf-0482-4326-afc9-12f53218ed06',
    name: 'Lynn Warr',
    role: UserType.Manager,
  },
  {
    email: 'david@gmail.com',
    id: '73bae2af-4fa4-4023-8829-1034604e7590',
    name: 'David Miller',
    role: UserType.Admin,
  },
  {
    email: 'ryan@gmail.com',
    id: '0c90ecd4-d159-4335-9377-f29ee6829847',
    name: 'Ryan Muller',
    role: UserType.Admin,
  },
];
