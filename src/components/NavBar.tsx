import * as React from 'react';
import Image from 'next/image';
import Link from './Link';
import {ThemeSwitch} from './ThemeSwitch';

type Props = {
  width: string;
  height: string;
  backgroundColor: string;
};

function NavBar(props: Props): React.ReactElement {
  const {width, height, backgroundColor} = props;
  return (
    <>
      <nav id="nav">
        <Link id="home-link" href="/">
          <Image
            id="my-photo"
            src="/me-min.jpg"
            width={32}
            height={32}
            alt="Anton"
          />
          <h3 id="my-name">Anton Kulyk</h3>
        </Link>
        <div id="nav-right">
          <div id="nav-links">
            <Link href="/about">
              <p>About</p>
            </Link>
          </div>
          <ThemeSwitch />
        </div>
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
          border-radius: 1rem;
        }
        #my-name {
          margin-left: 12px;
        }
        #nav-right {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        #nav-links {
          margin-right: 24px;
        }
      `}</style>
    </>
  );
}

export default NavBar;
