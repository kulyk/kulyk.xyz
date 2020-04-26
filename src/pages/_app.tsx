import {AppProps} from 'next/app';
import {ThemeProvider} from '../theming';

const fonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  "'Helvetica Neue'",
  "'Helvetica'",
  "'Arial'",
  'sans-serif',
];

function App({Component, pageProps}: AppProps): React.ReactElement {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: ${fonts.join(', ')};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
        }

        button {
          border-style: none;
          padding: 5px 10px;
          font-size: 1rem;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}

export default App;
