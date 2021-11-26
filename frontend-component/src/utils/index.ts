export const joinClassNames = (...classes: Array<string | boolean>): string => classes.filter((element) => typeof element === 'string').join(' ');
