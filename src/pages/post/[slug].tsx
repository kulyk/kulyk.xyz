import {NextPage, GetStaticPaths, GetStaticProps} from 'next';
import {Post as PostType, getAllPostSlugs, findBySlug} from '../../posts';
import {Layout, Markdown} from '../../components';
import {formatPubDate} from '../../utils';

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
      <Layout title={title} description={description}>
        <h1>{title}</h1>
        <div className="about-article">
          <h3 className="description secondary">{description}</h3>
          <p className="secondary">{publishedAt}</p>
        </div>
        <article id="post">
          <Markdown content={content} />
        </article>
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
  const slugs = getAllPostSlugs();
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
  const {post, content} = await findBySlug(slug);
  return {props: {post, content}};
};

export default Post;
