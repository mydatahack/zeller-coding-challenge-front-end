import React from 'react';
import { shallow } from 'enzyme';
import { UserDescription } from '.';

describe('<UserAvatar>', () => {
  it('renders with the correct initial', () => {
    const wrapper = shallow(
      <UserDescription userName='John Smith' userType='Admin' />
    );
    expect(wrapper.find('span').at(0).text()).toBe('John Smith');
    expect(wrapper.find('span').at(1).text()).toBe('Admin');
  });
});
