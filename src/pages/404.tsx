/* eslint-disable jsx-a11y/no-autofocus */

import {useCallback} from 'react';
import {GetStaticProps} from 'next';
import Terminal from 'react-console-emulator';
import Config from '../config';
import {PostCollection, Post} from '../posts';
import Emoji from '../components/Emoji';
import Layout from '../components/Layout';
import Link from '../components/Link';
import {getRandomListItem} from '../utils';

type PostPart = Pick<Post, 'title' | 'slug'>;

type NotFoundPageProps = {
  posts: PostPart[];
};

function sendMeEmail(): void {
  const mail = document.createElement<'a'>('a');
  mail.setAttribute('href', `mailto:${Config.EMAIL}`);
  mail.click();
  mail.remove();
}

const FUN_FACTS = [
  "🍉 I don't like sweet food except fruits and berries",
  '🤓 I wrote my first line of code in Visual Basic when I was 15 y.o',
  '☕ I love filter coffee, I even have a V60 dripper at home',
  '🎸 I play guitar and learn to sing',
  "😢 I've cried at Liam Gallagher's concert. So I like Oasis more than Blur obviously",
  '🤓 I choose static typing over dynamic',
  '📺 My favorite TV shows are "Halt and Catch Fire" and "Community"',
  "🧳 I've been in 10 countries: 🇺🇦🇵🇱🇫🇮🇸🇪🇪🇪🇩🇪🇫🇷🇪🇸🇮🇹🇬🇪",
  "☢ I've been in Chernobyl and Pripyat",
  "🤦‍♂️ Once I installed TikTok, I've spent 1.5 hours there",
  "👾 My favorite game is Dragon Age: Origins. Also, I've spent a lot of time playing World of Warcraft when I was a kid (as an undead warlock!)",
  '🎲 My favorite board game is Mansions of Madness',
];

function PageNotFound(props: NotFoundPageProps): React.ReactElement {
  const {posts} = props;

  const renderPostLink = useCallback(
    (post: PostPart, i: number) => (
      <>
        <Link key={post.slug} href={`/posts/${post.slug}`}>
          <p className="link">{`${i + 1}. ${post.title}`}</p>
        </Link>
        <style jsx>{`
          .link {
            text-decoration: underline;
          }
        `}</style>
      </>
    ),
    [],
  );

  const renderRandomFact = useCallback(() => {
    const fact = getRandomListItem<string>(FUN_FACTS);
    return <p>{fact}</p>;
  }, []);

  const commands = {
    ls: {
      name: 'ls',
      description: 'List existing articles',
      fn: (): React.ReactElement[] => posts.map(renderPostLink),
    },
    email: {
      name: 'email',
      description: 'Send me an email',
      fn: sendMeEmail,
    },
    fact: {
      name: 'fact',
      description: 'Learn random fun fact about me',
      fn: renderRandomFact,
    },
  };

  return (
    <>
      <Layout title="Page Not Found" hasNewsletterSection={false}>
        <div id="container-404">
          <p id="emoji-404">
            <Emoji name="sad">😔</Emoji>
          </p>
          <h1>This page does not exist</h1>
          <p className="message first-message">
            However, here is the website CLI.
          </p>
          <p className="message">
            I hope you will be able to find what you were looking for
          </p>
          <Terminal
            autoFocus
            noAutoScroll
            promptLabel={'$ '}
            commands={commands}
            style={{
              marginTop: 20,
              minWidth: 450,
              maxWidth: 450,
              maxHeight: 340,
            }}
          />
        </div>
      </Layout>
      <style jsx>{`
        #emoji-404 {
          font-size: 3rem;
        }

        #container-404 {
          margin: auto;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          width: 90%;
          text-align: center;
        }

        .message {
          text-align: center;
          padding: 3px 0;
        }

        .first-message {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps<NotFoundPageProps> = async () => {
  const collection = new PostCollection();
  const posts = await collection.getAllPosts();
  return {
    props: {posts},
  };
};

export default PageNotFound;
