import { joinClassNames, getFirstLetterInCapital } from '.';

describe('Shared util functions', () => {
  test('joinClassNames() should join class names correctly', () => {
    const isActive = false;
    const isCompleted = true;
    const result = joinClassNames(
      'componentClass',
      'primary',
      isActive && 'active',
      isCompleted && 'completed',
    );
    expect(result).toEqual('componentClass primary completed');
  });

  test('getFirstLetterInCapital() should return value correctly', () => {
    const letter = getFirstLetterInCapital('john smith');
    expect(letter).toEqual('J')
  })
});
