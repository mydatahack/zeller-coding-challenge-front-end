import { UserType } from '../enums';

export interface ListZellerCustomersData {
  listZellerCustomers: ListZellerCustomersNode;
}

export interface ListZellerCustomersNode {
  items: ListZellerCustomersDataItem[];
}
export interface ListZellerCustomersDataItem {
  email: string,
  id: ID;
  name: string;
  role: UserType;
}
