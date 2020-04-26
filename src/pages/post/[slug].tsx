import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {Post as PostType} from '../../types';
import {Layout} from '../../components';
import POSTS, {findBySlug} from '../../fakePosts';

type PostPageProps = {
  post: PostType;
};

const Post: NextPage<PostPageProps> = (props: PostPageProps) => {
  const {title} = props.post;
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
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
