import Link from './Link';
import {useTheme} from '../theming';

function NavBar(): React.ReactElement {
  const {isLight, toggle} = useTheme();
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
          height: 60px;
          justify-content: space-between;
          align-items: center;
        }
        #home-link {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        #my-photo {
          width: 2rem;
          height: 2rem;
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
