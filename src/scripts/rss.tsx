import fs from 'fs';
import path from 'path';
import {Feed} from 'feed';
import Config from '../config';
import {PostCollectionScripted} from '../posts';
import {renderToString} from '../mdx/render-to-string';
import {getPostFullUrl} from '../utils';
import {DEST} from './common';

const year = new Date().getFullYear();

const author = {
  name: 'Anton Kulyk',
  email: Config.EMAIL,
};

const feed = new Feed({
  id: Config.SITE_URL,
  title: 'Anton Kulyk',
  description: [
    'Anton Kulyk is a full-stack software',
    'engineer from Kyiv, Ukraine.',
    'Writing about better ways to build software.',
  ].join(' '),
  link: Config.SITE_URL,
  language: 'en',
  image: Config.getUrl('me-min.jpg'),
  favicon: Config.getUrl('me-min.jpg'),
  copyright: `All rights reserved ${year}, Anton Kulyk`,
  author,
});

feed.addCategory('Technology');
feed.addCategory('Engineering');
feed.addCategory('Software');
feed.addCategory('Code');

async function generate(): Promise<void> {
  const collection = new PostCollectionScripted();
  const posts = await collection.getAllPostsWithContent();

  const promises = posts.map(({post, content}) => {
    return new Promise(resolve => {
      renderToString(content, {scope: post}).then(formattedContent => {
        feed.addItem({
          id: post.slug,
          title: post.title,
          link: getPostFullUrl(post.slug),
          description: post.description,
          content: formattedContent.renderedOutput,
          author: [author],
          image: Config.getUrl(`banners/${post.banner}`),
          date: new Date(post.publishedAt),
        });
        resolve(true);
      });
    });
  });
  await Promise.all(promises);

  fs.writeFileSync(path.join(DEST, 'feed.xml'), feed.rss2());
}

generate();
