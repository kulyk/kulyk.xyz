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
  const [theme, setTheme] = useState<Theme>(LightTheme);
  const [isLight, setIsLight] = useState<boolean>(true);

  const toggle = useCallback(() => {
    const nextTheme = isLight ? DarkTheme : LightTheme;
    setTheme(nextTheme);
    setIsLight(!isLight);
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  }, [isLight]);

  useEffect(() => {
    const prevTheme = localStorage.getItem('theme');
    if (prevTheme === 'dark') {
      setTheme(DarkTheme);
      setIsLight(!isLight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{theme, isLight, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
