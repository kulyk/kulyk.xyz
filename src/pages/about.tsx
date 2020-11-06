import {NextPage} from 'next';
import {NextSeo} from 'next-seo';
import {Emoji, Layout} from '../components';
import {getUrl} from '../utils';

const Post: NextPage<unknown> = () => {
  return (
    <>
      <NextSeo
        canonical={getUrl('about')}
        openGraph={{
          title: 'About',
          url: getUrl('About'),
        }}
      />
      <Layout title="About">
        <h1>
          Hi <Emoji name="wave">👋</Emoji>
        </h1>
      </Layout>
      <style jsx>{`
        h2,
        h3,
        h4,
        h5 {
          margin-top: 1rem;
        }
        p {
          line-height: 1.5;
          font-size: 1.2rem;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default Post;
