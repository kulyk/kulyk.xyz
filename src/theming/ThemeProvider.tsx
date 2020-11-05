import * as React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Theme} from './types';
import {DarkTheme, LightTheme} from './themes';

type ThemeContextType = {
  theme: Theme;
  isLight: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  isLight: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}

type Props = {
  children: React.ReactNode;
};

function ThemeProvider(props: Props): React.ReactElement {
  const {children} = props;
  const [theme, setTheme] = useState<Theme>(DarkTheme);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [isLight, setIsLight] = useState<boolean>(true);

  const toggle = useCallback(() => {
    const nextTheme = isLight ? DarkTheme : LightTheme;
    setTheme(nextTheme);
    setIsLight(!isLight);
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  }, [isLight]);

  useEffect(() => {
    if (initialized) {
      return;
    }
    const prevTheme = localStorage.getItem('theme');
    const isDark = prevTheme === 'dark';
    setTheme(isDark ? DarkTheme : LightTheme);
    setIsLight(!isDark);
    setInitialized(true);
  }, [initialized, isLight]);

  return (
    <ThemeContext.Provider value={{theme, isLight, toggle}}>
      {initialized ? children : <div />}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
