import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {Post as PostType} from '../../types';
import {Layout} from '../../components';
import {formatPubDate} from '../../utils';
import POSTS, {findBySlug} from '../../fakePosts';

type PostPageProps = {
  post: PostType;
};

const Post: NextPage<PostPageProps> = (props: PostPageProps) => {
  const {title, description} = props.post;
  const publishedAt = formatPubDate(props.post.publishedAt);
  return (
    <>
      <Layout>
        <h1>{title}</h1>
        <div className="about-article">
          <h3 className="secondary">{description}</h3>
          <p className="secondary">{publishedAt}</p>
        </div>
      </Layout>
      <style jsx>{`
        .about-article {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
        }
      `}</style>
    </>
  );
};

type UrlQuery = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  const slugs = POSTS.map(post => ({
    params: {
      slug: post.slug,
    },
  }));
  return {
    paths: slugs,
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
  const post = findBySlug(slug);
  return {props: {post}};
};

export default Post;
