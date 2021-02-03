import * as React from 'react';
import Head from 'next/head';
import {useTheme} from '../theming';

export interface PageProps {
  id?: string;
  children?: React.ReactNode;
}

function Page(props: PageProps): React.ReactElement {
  const {children} = props;
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" as="font" type="font/ttf" href="/fonts/Inter.ttf" />
        <link rel="icon" href="favicons/favicon.ico" />
        <link rel="icon" href="favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png" />
        <link rel="manifest" href="favicons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children}
      <style jsx global>{`
        html,
        body {
          min-height: 100vh;
          background-color: ${theme.background.main};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          color: ${theme.text.main};
        }

        a {
          color: ${theme.link.default};
        }

        button {
          color: ${theme.button.text};
          background-color: ${theme.button.background};
        }

        input {
          color: ${theme.input.text};
          background-color: ${theme.input.background};
          border-color: ${theme.input.border};
        }

        code {
          font-family: 'Lucida Console', Monaco, monospace;
          font-size: 0.8rem;
        }

        li {
          color: ${theme.text.main};
        }

        button:hover {
          background-color: ${theme.button.hover};
        }

        button:disabled:hover {
          background-color: ${theme.button.background};
        }

        a:hover {
          color: ${theme.link.hover};
        }

        .page-link {
          color: ${theme.link.default};
        }

        .secondary {
          color: ${theme.text.secondary};
        }
      `}</style>
    </>
  );
}

export default Page;
