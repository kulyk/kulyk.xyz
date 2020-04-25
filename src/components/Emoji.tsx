type Props = {
  name: string;
  children: string;
};

function Emoji(props: Props): React.ReactElement {
  const {name, children} = props;
  return (
    <span role="img" aria-label={`${name} emoji`}>
      {children}
    </span>
  );
}

export default Emoji;
