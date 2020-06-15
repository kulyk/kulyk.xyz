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
  return `${base} — ${title}`;
}

const favicon = [
  'data:image/svg+xml,',
  '<svg xmlns=%22http://www.w3.org/2000/svg%22 ',
  'viewBox=%220 0 100 100%22>',
  '<text y=%22.9em%22 font-size=%2290%22>',
  '🤖',
  '</text>',
  '</svg>',
].join('');

function Page(props: PageProps): React.ReactElement {
  const {title, description, children} = props;
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
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
