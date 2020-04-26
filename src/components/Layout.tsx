import Page, {PageProps} from './Page';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps extends PageProps {
  hasNavBar?: boolean;
  hasFooter?: boolean;
}

const defaultProps = {
  hasNavBar: true,
  hasFooter: true,
};

function Layout(props: LayoutProps): React.ReactElement {
  const {children, hasNavBar, hasFooter} = props;
  return (
    <>
      <Page>
        <div id="layout">
          {hasNavBar && <NavBar />}
          <main id="content-root">{children}</main>
          {hasFooter && <Footer />}
        </div>
      </Page>
      <style jsx global>{`
        #layout {
          display: flex;
          flex-direction: column;
          min-height: 95vh;
          max-width: 800px;
          margin: auto;
          padding: 0 1.5rem 20px 1.5rem;
        }

        #content-root {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-top: 40px;
        }
      `}</style>
    </>
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
