import {createContext, useCallback, useContext, useState} from 'react';
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
  const [theme, setTheme] = useState<Theme>(LightTheme);
  const [isLight, setIsLight] = useState<boolean>(true);

  const toggle = useCallback(() => {
    const nextTheme = isLight ? DarkTheme : LightTheme;
    console.log({
      current: isLight ? 'light' : 'dark',
      next: isLight ? 'dark' : 'light',
    });
    setTheme(nextTheme);
    setIsLight(!isLight);
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{theme, isLight, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
