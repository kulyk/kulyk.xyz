import {AppProps} from 'next/app';

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
      <Component {...pageProps} />
      <style jsx global>{`
        .html,
        .body {
          margin: 0;
          padding: 0;
          font-family: ${fonts.join(', ')};
          background-color: #fff;
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
          font-family: ${fonts.join(', ')};
        }

        a {
          color: #007aff;
          text-decoration: none;
        }

        a:hover {
          color: #4ca1fe;
        }

        .secondary {
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </>
  );
}

export default App;
