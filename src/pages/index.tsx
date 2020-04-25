import {NextPage} from 'next';
import {Emoji, Layout} from '../components';

function Intro(): React.ReactElement {
  return (
    <div>
      <p className="intro">
        Hi, I&apos;m Anton <Emoji name="wave">👋</Emoji> I&apos;m a full-stack
        software engineer currently leading the software team at{' '}
        <a href="pix.style" target="_blank">
          Pix
        </a>
        . We combine creativity with portability through our backpacks with LED
        screens you can control with your phone.
      </p>
      <p className="intro">
        Here I write about better ways to build software I found while coding,
        learning and talking to other people. Primarily I work with React, React
        Native and Node.js. Here is my <a href="github.com/kulyk">GitHub</a>.
      </p>
      <p className="intro">
        If you want to get in touch,{' '}
        <a href="mailto:kuliks.anton@gmail.com">send me an email</a>
      </p>
      <style jsx>{`
        .intro {
          line-height: 1.5;
          font-size: 1.2rem;
          margin-top: 1rem;
        }
        .intro:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}

const Home: NextPage<{}> = () => (
  <Layout>
    <Intro />
  </Layout>
);

export default Home;
