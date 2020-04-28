import {Theme} from './types';

export const LightTheme: Theme = {
  background: {
    main: '#fff',
    hover: 'rgba(0, 0, 0, 0.05)',
  },
  text: {
    main: '#000',
    secondary: 'rgba(0, 0, 0, 0.6)',
  },
  button: {
    text: '#fff',
    background: '#007aff',
    hover: '#4ca1fe',
  },
  link: {
    default: '#007aff',
    hover: '#4ca1fe',
  },
  code: {
    background: 'hsla(0,0%,58.8%,.3)',
    text: '#000',
  },
};

export const DarkTheme: Theme = {
  background: {
    main: '#131415',
    hover: 'rgba(58, 58, 60, 0.4)',
  },
  text: {
    main: '#fff',
    secondary: 'rgba(255, 255, 255, 0.6)',
  },
  button: {
    text: '#fff',
    background: '#0A84FF',
    hover: '#4ca1fe',
  },
  link: {
    default: '#0A84FF',
    hover: '#4ca1fe',
  },
  code: {
    background: 'hsla(0, 0%, 58.8%, 0.3)',
    text: '#fff',
  },
};
