/* eslint-disable jsx-a11y/no-autofocus */

import {useCallback} from 'react';
import {GetStaticProps} from 'next';
import Terminal from 'react-console-emulator';
import {Post, getAllPosts} from '../posts';
import {Emoji, Layout, Link} from '../components';

type PostPart = Pick<Post, 'title' | 'slug'>;

type NotFoundPageProps = {
  posts: PostPart[];
};

function PageNotFound(props: NotFoundPageProps): React.ReactElement {
  const {posts} = props;

  const renderPostLink = useCallback(
    (post: PostPart, i: number) => (
      <>
        <Link key={post.slug} href={`/post/${post.slug}`}>
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

  const commands = {
    ls: {
      name: 'ls',
      description: 'List existing articles',
      fn: (): React.ReactElement[] => posts.map(renderPostLink),
    },
  };

  return (
    <>
      <Layout title="Page Not Found">
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
            style={{marginTop: 20, minWidth: 450}}
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
  const posts = await getAllPosts();
  return {
    props: {posts},
  };
};

export default PageNotFound;
