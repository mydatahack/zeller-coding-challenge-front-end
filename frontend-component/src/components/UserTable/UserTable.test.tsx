import React from 'react';
import { shallow } from 'enzyme';
import { UserTable } from '.';

const testData = [
  { userName: 'John Smith', userType: 'Admin' },
  { userName: 'Adam Muller', userType: 'Admin' },
  { userName: 'Perri Smith', userType: 'Admin' },
];

describe('<UserAvatar>', () => {
  it('renders with the correct initial', () => {
    const wrapper = shallow(
      <UserTable users={testData} />
    );

    expect(wrapper.find('tr').length).toBe(3);
    expect(wrapper.find('td').length).toBe(3);
    expect(wrapper.find('UserAvatar').length).toBe(3);
    expect(wrapper.find('UserDescription').length).toBe(3);
  });
});
