import Emoji from './Emoji';
import {getRandomInt} from '../utils';

type FooterEmoji = {
  name: string;
  emoji: string;
};

const EMOJI_LIST: FooterEmoji[] = [
  {name: 'alien', emoji: '👽'},
  {name: 'beer', emoji: '🍺'},
  {name: 'dance', emoji: '🕺'},
  {name: 'fire', emoji: '🔥'},
  {name: 'ghost', emoji: '👻'},
  {name: 'guitar', emoji: '🎸'},
  {name: 'koala', emoji: '🐨'},
  {name: 'heart', emoji: '❤️'},
  {name: 'poop', emoji: '💩'},
  {name: 'scream', emoji: '😱'},
  {name: 'star struck', emoji: '🤩'},
  {name: 'rainbow', emoji: '🌈'},
  {name: 'working', emoji: '👨‍💻'},
  {name: 'unicorn', emoji: '🦄'},
];

function getRandomEmoji(): FooterEmoji {
  const index = getRandomInt(0, EMOJI_LIST.length - 1);
  return EMOJI_LIST[index];
}

function Footer(): React.ReactElement {
  const year = new Date().getFullYear();
  const {name, emoji} = getRandomEmoji();
  return (
    <>
      <footer id="footer">
        <p>{`Anton Kulyk © ${year}`}</p>
        <Emoji name={name}>{emoji}</Emoji>
      </footer>
      <style jsx>{`
        #footer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          height: 40px;
        }
      `}</style>
    </>
  );
}

export default Footer;
