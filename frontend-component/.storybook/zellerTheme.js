import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  appBg: '#212322',
  // appContentBg: '#333333',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  fontBase: '"InterZeller", Arial, Helvetica, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'gray',
  barSelectedColor: '#212322',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Zeller Design System',
  brandUrl: 'https://www.myzeller.com/',
  // brandImage: '',
});

