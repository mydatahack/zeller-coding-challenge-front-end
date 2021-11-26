import React from 'react';
import { shallow } from 'enzyme';
import { UserTable } from '.';

const testData = [
  { userName: 'John Smith', role: 'Admin' },
  { userName: 'Adam Muller', role: 'Admin' },
  { userName: 'Perri Smith', role: 'Admin' },
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
