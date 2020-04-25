interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): React.ReactElement {
  const {children} = props;
  return (
    <>
      <div className="container">{children}</div>
      <style jsx global>{`
        .container {
          display: 'flex';
          flex: 1;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default Layout;
