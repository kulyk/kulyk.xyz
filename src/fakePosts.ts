import {Post} from './types';

function addSlug(post: Omit<Post, 'slug'>): Post {
  const words = post.title.split(' ').map(word => word.toLowerCase());
  const slug = words.join('-');
  return {
    ...post,
    slug,
  };
}

const POSTS: Post[] = [
  {
    title: 'My Work Setup',
    emoji: '👨‍💻',
    description: [
      'How I optimize my tools and',
      'workflows for software development',
    ].join(' '),
    publishedAt: '2020-04-25T23:18:17.522Z',
  },
  {
    title: 'Code Quality from the Day One',
    emoji: '🔨',
    description: 'Tools and Workflows to Keep Your Tech Dept Low',
    publishedAt: '2020-04-24T23:18:17.522Z',
  },
  {
    title: 'Less Code is More',
    emoji: '✨',
    description: [
      'Why Good Software Engineers',
      'delete code, rather than write',
    ].join(' '),
    publishedAt: '2020-04-16T23:18:17.522Z',
  },
  {
    title: 'Writing Decoupled React Apps',
    emoji: '👽',
    description: [
      'Best Practices and Design Patterns',
      'We Forgot for Some Reason',
    ].join(' '),
    publishedAt: '2020-04-05T23:18:17.522Z',
  },
  {
    title: 'Values and References in JavaScript',
    emoji: '🐞',
    description: [
      'A tale of the most tricky bugs',
      'for beginner developers',
    ].join(' '),
    publishedAt: '2020-03-27T23:18:17.522Z',
  },
  {
    title: 'Optimizing React Native Apps',
    emoji: '📈',
    description: 'Measuring, Improving and Measuring',
    publishedAt: '2020-03-14T23:18:17.522Z',
  },

  {
    title: 'You Must Give GitHub Actions a Try',
    emoji: '🍻',
    description: 'Automating Common Workflows',
    publishedAt: '2020-01-29T23:18:17.522Z',
  },
].map(addSlug);

export function findBySlug(slug: string): Post {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return POSTS.find(p => p.slug === slug)!;
}

export default POSTS;
