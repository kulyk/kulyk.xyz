/* eslint-disable @typescript-eslint/camelcase */

import {AppProps} from 'next/app';
import {DefaultSeo} from 'next-seo';
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
      <DefaultSeo
        canonical="https://kulyk.xyz/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://kulyk.xyz/',
          site_name: 'Anton Kulyk',
        }}
        twitter={{
          handle: '@anton_kulyk',
          site: '@anton_kulyk',
          cardType: 'summary_large_image',
        }}
      />
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

        input {
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
          padding: 5px 10px;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}

export default App;
