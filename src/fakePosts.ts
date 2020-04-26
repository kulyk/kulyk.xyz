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
    id: '1',
    title: 'My Work Setup',
    emoji: '👨‍💻',
    description: [
      'How I optimize my tools and',
      'workflows for software development',
    ].join(' '),
    publishedAt: '2020-04-25T23:18:17.522Z',
  },
  {
    id: '2',
    title: 'Code Quality from the Day One',
    emoji: '🔨',
    description: 'Tools and Workflows to Keep Your Tech Dept Low',
    publishedAt: '2020-04-24T23:18:17.522Z',
  },
  {
    id: '3',
    title: 'Less Code is More',
    emoji: '✨',
    description: [
      'Why Good Software Engineers',
      'delete code, rather than write',
    ].join(' '),
    publishedAt: '2020-04-16T23:18:17.522Z',
  },
  {
    id: '4',
    title: 'Writing Decoupled React Apps',
    emoji: '👽',
    description: [
      'Best Practices and Design Patterns',
      'We Forgot for Some Reason',
    ].join(' '),
    publishedAt: '2020-04-05T23:18:17.522Z',
  },
  {
    id: '6',
    title: 'Values and References in JavaScript',
    emoji: '🐞',
    description: [
      'A tale of the most tricky bugs',
      'for beginner developers',
    ].join(' '),
    publishedAt: '2020-03-27T23:18:17.522Z',
  },
  {
    id: '7',
    title: 'Optimizing React Native Apps',
    emoji: '📈',
    description: 'Measuring, Improving and Measuring',
    publishedAt: '2020-03-14T23:18:17.522Z',
  },

  {
    id: '8',
    title: 'How to Automate Frontend Development',
    emoji: '👨‍🚀',
    description: '100 Reasons I Love Netlify',
    publishedAt: '2020-02-18T23:18:17.522Z',
  },

  {
    id: '9',
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
