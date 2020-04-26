import Head from 'next/head';
import {useTheme} from '../theming';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

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

function Layout(props: LayoutProps): React.ReactElement {
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
      <div id="layout">
        <NavBar />
        <main id="content-root">{children}</main>
        <Footer />
      </div>
      <style jsx global>{`
        html,
        body {
          background-color: ${theme.background};
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

        #layout {
          max-width: 800px;
          margin: auto;
          padding: 0 1.5rem 20px 1.5rem;
        }
        #content-root {
          display: 'flex';
          flex: 1;
          justify-content: center;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
}

export default Layout;
