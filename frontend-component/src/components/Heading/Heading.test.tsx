import React from 'react';
import { shallow } from 'enzyme';
import { Heading, HeadingLevel } from './Heading';
import { HeadingFontStyle } from './enums';

const testCases = [
  [1, null],
  [2, null],
  [3, null],
  [1, HeadingFontStyle.h2],
];

describe('<Heading />', () => {
  test.each(testCases)('should render h%s correctly',
    (level: HeadingLevel, renderAs: HeadingFontStyle) => {
      const wrapper = shallow(
      <Heading level={level} renderAs={renderAs}>
        Hello
      </Heading>);
      const expectedClassName = renderAs ?? `heading${level}`;
      const heading = wrapper.find(`h${level}`);
      expect(wrapper.text()).toBe('Hello');
      expect(heading.exists()).toBeTruthy();
      expect(heading.hasClass(expectedClassName)).toBeTruthy();
    })
})
