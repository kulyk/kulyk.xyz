import {Post} from './types';

const POSTS: Post[] = [
  {
    id: '1',
    title: '👨‍💻 My Work Setup',
    description: [
      'How I optimize my tools and',
      'workflows for software development',
    ].join(' '),
    publishedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: '🔨 Code Quality from the Day One',
    description: 'Tools and Workflows to Keep Your Tech Dept Low',
    publishedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: '✨ Less Code is More',
    description: [
      'Why Good Software Engineers',
      'delete code, rather than write',
    ].join(' '),
    publishedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: '👽 Writing Decoupled React Apps',
    description: [
      'Best Practices and Design Patterns',
      'We Forgot for Some Reason',
    ].join(' '),
    publishedAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: '🐞 Values and References in JavaScript',
    description: [
      'A tale of the most tricky bugs',
      'for beginner developers',
    ].join(' '),
    publishedAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: '📈 Optimizing React Native Apps',
    description: 'Measuring, Improving and Measuring',
    publishedAt: new Date().toISOString(),
  },

  {
    id: '8',
    title: '⚙ How to Automate Frontend Development',
    description: '100 Reasons I Love Netlify',
    publishedAt: new Date().toISOString(),
  },

  {
    id: '9',
    title: '⚙ You Must Give GitHub Actions a Try',
    description: 'Automatic Common Workflows',
    publishedAt: new Date().toISOString(),
  },
];

export default POSTS;
