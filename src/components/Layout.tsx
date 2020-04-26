import Head from 'next/head';
import {useTheme} from '../theming';
import NavBar from './NavBar';

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

function Layout(props: LayoutProps): React.ReactElement {
  const {title, description, children} = props;
  const {theme} = useTheme();
  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="layout">
        <NavBar />
        <main id="content-root">{children}</main>
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
          padding: 0 1.5rem 50px 1.5rem;
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
