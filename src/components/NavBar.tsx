import Link from './Link';

function NavBar(): React.ReactElement {
  return (
    <>
      <nav id="nav">
        <Link id="home-link" href="/">
          <img id="my-photo" src="/me-min.jpg" alt="Anton" />
          <h3 id="my-name">Anton Kulyk</h3>
        </Link>
      </nav>
      <style jsx global>{`
        #nav {
          display: flex;
          height: 60px;
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
          color: black;
          margin-left: 12px;
        }
      `}</style>
    </>
  );
}

export default NavBar;
