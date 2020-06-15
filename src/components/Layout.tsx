import {useTheme} from '../theming';
import Page, {PageProps} from './Page';
import NavBar from './NavBar';
import Newsletter from './Newsletter';
import Footer from './Footer';

interface LayoutProps extends PageProps {
  hasNavBar?: boolean;
  hasNewsletterSection?: boolean;
  hasFooter?: boolean;
}

const defaultProps = {
  hasNavBar: true,
  hasNewsletterSection: true,
  hasFooter: true,
};

const NAV_BAR_HEIGHT = 60;
const WIDTH = '800px';

function Layout(props: LayoutProps): React.ReactElement {
  const {children, hasNavBar, hasFooter, ...pageProps} = props;
  const {theme} = useTheme();
  return (
    <>
      <Page {...pageProps}>
        <div id="layout">
          {hasNavBar && (
            <NavBar
              width={WIDTH}
              height={`${NAV_BAR_HEIGHT}px`}
              backgroundColor={theme.background.main}
            />
          )}
          <main id="content-root">{children}</main>
          <Newsletter />
          {hasFooter && <Footer />}
        </div>
      </Page>
      <style jsx global>{`
        #layout {
          display: flex;
          flex-direction: column;
          min-height: 95vh;
          max-width: ${WIDTH};
          margin: auto;
          padding: 0 1.5rem 20px 1.5rem;
        }

        #content-root {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-top: ${30 + NAV_BAR_HEIGHT}px;
        }
      `}</style>
    </>
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
