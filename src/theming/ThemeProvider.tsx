import * as React from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Theme} from './types';
import {DarkTheme, LightTheme} from './themes';

type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: LightTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
});

export function useTheme(): ThemeContextType {
  return useContext(ThemeContext);
}

type Props = {
  children: React.ReactNode;
};

const preferDarkQuery = '(prefers-color-scheme: dark)';

function ThemeProvider(props: Props): React.ReactElement {
  const {children} = props;
  const [theme, setTheme] = useState<Theme>(DarkTheme);

  const toggle = useCallback(() => {
    const nextTheme = theme.name === 'dark' ? LightTheme : DarkTheme;
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme.name);
  }, [theme]);

  useEffect(() => {
    const prevTheme = localStorage.getItem('theme');
    if (prevTheme) {
      setTheme(prevTheme === 'dark' ? DarkTheme : LightTheme);
    } else {
      setTheme(
        window.matchMedia(preferDarkQuery).matches ? DarkTheme : LightTheme,
      );
    }
  }, []);

  const value = useMemo(() => ({theme, toggle}), [theme, toggle]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
