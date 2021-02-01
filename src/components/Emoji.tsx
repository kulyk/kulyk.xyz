import * as React from 'react';
import EmojiRender, {Emojione} from 'react-emoji-render';

type Props = {
  id?: string;
  name: string;
  children: string;
};

function isAppleDevice(): boolean {
  return /iPad|iPhone|iPod|Mac/.test(navigator.userAgent) && !window.MSStream;
}

function Emoji(props: Props): React.ReactElement {
  const {id, name, children} = props;
  if (typeof window === 'undefined') {
    return <span id={id} role="img" aria-label={`${name} emoji`} />;
  }
  const Render = isAppleDevice() ? EmojiRender : Emojione;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Render id={id} text={children} aria-label={`${name} emoji`} />;
}

export default Emoji;
