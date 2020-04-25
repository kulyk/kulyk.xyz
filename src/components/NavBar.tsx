function NavBar(): React.ReactElement {
  return (
    <>
      <nav id="nav">
        <img id="my-photo" src="/me.jpg" alt="Anton" />
        <h3 id="my-name">Anton Kulyk</h3>
      </nav>
      <style jsx global>{`
        #nav {
          display: flex;
          height: 60px;
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
