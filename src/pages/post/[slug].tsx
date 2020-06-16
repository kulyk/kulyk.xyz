/* eslint-disable @typescript-eslint/camelcase */

import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import Config from '../../config';
import {PostCollection, Post as PostType} from '../../posts';
import {Emoji, Layout, Markdown} from '../../components';
import {formatPubDate, getPostFullUrl} from '../../utils';

function ShareSection(): React.ReactElement {
  return (
    <>
      <section id="share-root">
        <h2 id="hey">Do you have a moment?</h2>
        <div id="share-container">
          <p id="share-title">
            Hi, I&apos;m new to blogging. If you liked the article, please share
            it on Facebook or Twitter, it will help me a lot{' '}
            <Emoji name="pray">🙏</Emoji>
          </p>
          <div>
            <TwitterShareButton
              url={window.location.href}
              style={{marginRight: 16}}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
          </div>
        </div>
      </section>
      <style jsx>{`
        #share-root {
          margin-top: 100px;
        }

        #share-container {
          display: flex;
          justify-content: space-between;
        }

        #hey {
          padding-bottom: 16px;
        }

        #share-title {
          flex: 0.8;
          line-height: 1.5em;
        }
      `}</style>
    </>
  );
}

type PostPageProps = {
  post: PostType;
  content: string;
};

const Post: NextPage<PostPageProps> = (props: PostPageProps) => {
  const {post, content} = props;
  const {title, description} = post;
  const publishedAt = formatPubDate(post.publishedAt);
  return (
    <>
      <NextSeo
        canonical={getPostFullUrl(post.slug)}
        openGraph={{
          title,
          description,
          type: 'website',
          locale: 'en_US',
          url: getPostFullUrl(post.slug),
          site_name: 'Anton Kulyk',
        }}
        twitter={{
          handle: '@anton_kulyk',
          site: '@anton_kulyk',
          cardType: 'summary_large_image',
        }}
      />
      <Layout title={title} description={description}>
        <h1>{title}</h1>
        <div className="about-article">
          <h3 className="description secondary">{description}</h3>
          <p className="secondary">{publishedAt}</p>
        </div>
        <article id="post">
          <Markdown content={content} />
        </article>
        <ShareSection />
      </Layout>
      <style jsx>{`
        .about-article {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 12px;
        }

        .description {
          display: flex;
          flex: 0.9;
        }

        #post {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

type UrlQuery = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const collection = new PostCollection();
  const slugs = collection.getAllPostSlugs();
  const paths = slugs.map(slug => ({
    params: {slug},
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostPageProps,
  UrlQuery
> = async context => {
  const slug = context.params?.slug;
  if (!slug) {
    throw new Error('Post not found');
  }
  const collection = new PostCollection();
  const {post, content} = await collection.findBySlug(slug);
  return {props: {post, content}};
};

export default Post;
