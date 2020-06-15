import EmojiRender, {Emojione} from 'react-emoji-render';

type Props = {
  id?: string;
  name: string;
  children: string;
};

function Emoji(props: Props): React.ReactElement {
  const {id, name, children} = props;
  const isAppleDevice =
    /iPad|iPhone|iPod|Mac/.test(navigator.userAgent) && !window.MSStream;
  const Render = isAppleDevice ? EmojiRender : Emojione;
  return (
    <span id={id} role="img" aria-label={`${name} emoji`}>
      <Render text={children} />
    </span>
  );
}

export default Emoji;
