import NavBar from './NavBar';

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout(props: LayoutProps): React.ReactElement {
  const {children} = props;
  return (
    <>
      <div id="layout">
        <NavBar />
        <main id="content-root">{children}</main>
      </div>
      <style jsx global>{`
        #layout {
          max-width: 800px;
          margin: auto;
        }
        #content-root {
          display: 'flex';
          flex: 1;
          justify-content: center;
          margin-top: 60px;
        }
      `}</style>
    </>
  );
}

export default Layout;
