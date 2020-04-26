import {Theme} from './types';

export const LightTheme: Theme = {
  background: '#fff',
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
};

export const DarkTheme: Theme = {
  background: '#131415',
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
};
