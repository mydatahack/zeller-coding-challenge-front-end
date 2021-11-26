import React from 'react';
import { mount } from 'enzyme';
import { UserTypeSelector } from './UserTypeSelector';
import { Provider as MockContextProvider } from '../../context/ZellerCustomerProvider';
import { ZellerCustomerProviderContextProps } from '../../context/types';
import { UserType } from '../../enums';
import { mockCustomerData } from '../../test-data/mockCustomerData';

const mockSetUserType = jest.fn();

const mockContextValue = (): ZellerCustomerProviderContextProps => ({
  customers: mockCustomerData,
  userType: UserType.Admin,
  setUserType: mockSetUserType,
  error: false,
  fetched: true,
});

const setUp = () => (
  mount(
    <MockContextProvider value={mockContextValue()}>
      <UserTypeSelector />
    </MockContextProvider>,
  )
);

describe('<UserTypeSelector />', () => {
  it('should render the selction correctly', () => {
    const wrapper = setUp();

    const options = wrapper.find('span.label');
    expect(wrapper.find('input').length).toBe(2);
    expect(options.at(0).text()).toBe('Admin');
    expect(options.at(1).text()).toBe('Manager');
  });

  it('should call setUserType onChange', () => {
    const wrapper = setUp();
    wrapper.find('input').at(1)
      .simulate('change', { target: { value: 'MANAGER' } });
    expect(mockSetUserType).toHaveBeenCalledWith('MANAGER');
  });
});
