type Props = {
  id?: string;
  name: string;
  children: string;
};

function Emoji(props: Props): React.ReactElement {
  const {id, name, children} = props;
  return (
    <span id={id} role="img" aria-label={`${name} emoji`}>
      {children}
    </span>
  );
}

export default Emoji;
