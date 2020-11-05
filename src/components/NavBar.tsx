import * as React from 'react';
import Link from './Link';
import {useTheme} from '../theming';

type Props = {
  width: string;
  height: string;
  backgroundColor: string;
};

function NavBar(props: Props): React.ReactElement {
  const {isLight, toggle} = useTheme();
  const {width, height, backgroundColor} = props;
  return (
    <>
      <nav id="nav">
        <Link id="home-link" href="/">
          <img id="my-photo" src="/me-min.jpg" alt="Anton" />
          <h3 id="my-name">Anton Kulyk</h3>
        </Link>
        <button onClick={toggle}>{isLight ? 'Dark' : 'Light'}</button>
      </nav>
      <style jsx global>{`
        #nav {
          display: flex;
          height: ${height};
          justify-content: space-between;
          align-items: center;
          position: fixed;
          max-width: ${width};
          padding: 0 1.5rem;
          background-color: ${backgroundColor};
          margin: auto;
          top: 0;
          left: 0;
          right: 0;
          z-index: 60;
        }
        #home-link {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        #my-photo {
          width: 3rem;
          height: 3rem;
          border-radius: 1.5rem;
        }
        #my-name {
          margin-left: 12px;
        }
      `}</style>
    </>
  );
}

export default NavBar;
