export const joinClassNames = (...classes: Array<string | boolean>): string => classes.filter((element) => typeof element === 'string').join(' ');

export const getFirstLetterInCapital = (userName: string): string => userName?.charAt(0).toUpperCase();
