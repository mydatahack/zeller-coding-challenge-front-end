import React from 'react';
import { mount } from 'enzyme';
import { CustomerPage } from './CustomerPage';
import { Provider as MockContextProvider } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { UserType } from '../../enums';
import { mockCustomerData } from '../../test-data/mockCustomerData';

const mockSetUserType = jest.fn();

const mockContextValue = (error: boolean, fetched: boolean)
  : ZellerCustomerProviderContextProps => ({
  customers: mockCustomerData,
  userType: UserType.Admin,
  setUserType: mockSetUserType,
  error,
  fetched,
});

const setUp = (error: boolean, fetched: boolean) => (
  mount(
    <MockContextProvider value={mockContextValue(error, fetched)}>
      <CustomerPage />
    </MockContextProvider>,
  )
);

describe('<CustomerPage />', () => {
  it('should render the error message', () => {
    const wrapper = setUp(true, true);
    const heading = wrapper.find('h1');
    expect(heading.text()).toBe('Oops.. Something went wrong😭');
    expect(heading.length).toBe(1);
    expect(wrapper.find('CubeLoadingSpinner').exists()).toBeFalsy();
  });

  it('should render the loading spinner', () => {
    const wrapper = setUp(false, false);
    const heading = wrapper.find('h1');
    expect(heading.length).toBe(0);
    expect(wrapper.find('CubeLoadingSpinner').exists()).toBeTruthy();
  });

  it('should render the App', () => {
    const wrapper = setUp(false, true);
    const heading = wrapper.find('h1');
    expect(heading.text()).toBe('Zeller Customer App 🤙');
    expect(heading.length).toBe(1);
    expect(wrapper.find('CubeLoadingSpinner').exists()).toBeFalsy();
  });
});
