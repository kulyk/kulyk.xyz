import path from 'path';
import {Feed} from 'feed';
import {PostCollectionScripted, Post} from '../posts';

const collection = new PostCollectionScripted();

const DESCRIPTION = [
  "I'm a full-stack software",
  'engineer from Kyiv, Ukraine.',
  'Writing about better ways to build software.',
  'TypeScript, JavaScript, React, React Native, Node.js',
].join(' ');

const WEBSITE = 'https://kulyk.xyz/';
const YEAR = new Date().getFullYear();

const author = {
  name: 'Anton Kulyk',
  email: 'kuliks.anton@gmail.com',
  link: WEBSITE,
};

const feed = new Feed({
  title: 'Anton Kulyk',
  description: DESCRIPTION,
  id: WEBSITE,
  link: WEBSITE,
  language: 'en',
  image: 'https://kulyk.xyz/me-min.jpg',
  copyright: `All rights reserved ${YEAR}, Anton Kulyk`,
  updated: new Date(),
  author,
});

feed.addCategory('Software Engineering');
feed.addCategory('React');
feed.addCategory('React Native');

function getPostUrl(post: Post): string {
  return path.join(WEBSITE, post.slug);
}

type PostIter = {
  post: Post;
  content: string;
};

async function addPosts(): Promise<void> {
  const posts = await collection.getAllPostsWithContent();
  posts.forEach(({post, content}: PostIter) => {
    feed.addItem({
      id: getPostUrl(post),
      link: getPostUrl(post),
      title: post.title,
      description: post.description,
      author: [author],
      content,
      date: new Date(post.publishedAt),
    });
  });
}

addPosts();
