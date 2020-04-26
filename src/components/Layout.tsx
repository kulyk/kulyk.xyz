import Head from 'next/head';
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
        #layout {
          max-width: 800px;
          margin: auto;
          padding-bottom: 50px;
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
