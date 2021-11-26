import React from 'react';
import { mount } from 'enzyme';
import { UserInfoTable } from './UserInfoTable';
import { Provider as MockContextProvider } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { UserType } from '../../enums';
import { mockCustomerData } from '../../test-data/mockCustomerData';

const mockContextValue = (type: UserType): ZellerCustomerProviderContextProps => ({
  customers: mockCustomerData,
  userType: type,
  setUserType: jest.fn(),
  error: false,
  fetched: true,
});

const setUp = (userType: UserType) => (
  mount(
    <MockContextProvider value={mockContextValue(userType)}>
      <UserInfoTable />
    </MockContextProvider>,
  )

);
describe('<UserInfoTable />', () => {
  it('should render the admin users correctly', () => {
    const wrapper = setUp(UserType.Admin);
    const userNames = wrapper.find('span.userName');
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.find('td').length).toBe(2);
    expect(userNames.at(0).text()).toBe('David Miller');
    expect(userNames.at(1).text()).toBe('Ryan Muller');
  });
  it('should render the admin users correctly', () => {
    const wrapper = setUp(UserType.Manager);
    const userName = wrapper.find('span.userName');
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.find('td').length).toBe(1);
    expect(userName.at(0).text()).toBe('Lynn Warr');
  });
});
