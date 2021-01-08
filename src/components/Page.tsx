import * as React from 'react';
import Head from 'next/head';
import {useTheme} from '../theming';

export interface PageProps {
  id?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const defaultProps = {
  description: [
    'Anton Kulyk is a full-stack software',
    'engineer from Kyiv, Ukraine.',
    'Writing about better ways to build software.',
    'TypeScript, JavaScript, React, React Native, Node.js',
  ].join(' '),
};

function getPageTitle(title?: string): string {
  const base = 'Anton Kulyk';
  if (!title) {
    return base;
  }
  return `${title} | ${base}`;
}

function Page(props: PageProps): React.ReactElement {
  const {title, description, children} = props;
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
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

Page.defaultProps = defaultProps;

export default Page;
