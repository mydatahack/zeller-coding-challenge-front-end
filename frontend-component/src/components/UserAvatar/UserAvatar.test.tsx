import React from 'react';
import { shallow } from 'enzyme';
import { UserAvatar } from '.';

describe('<UserAvatar>', () => {
  it('renders with the correct initial', () => {
    const wrapper = shallow(<UserAvatar userInitial='T' />);
    expect(wrapper.find('span').text()).toBe('T');
  });
});
