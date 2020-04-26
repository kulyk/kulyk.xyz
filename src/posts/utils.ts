import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import {compareDesc, parseISO} from 'date-fns';
import {Post} from '../types';

type ParsedPost = {
  post: Post;
  content: string;
};

export function readPost(file: string): ParsedPost {
  const {data, content} = matter(file);
  return {
    post: data as Post,
    content,
  };
}

function filePathToSlug(filePath: string): string {
  return path.basename(filePath, '.md');
}

export async function findBySlug(slug: string): Promise<ParsedPost> {
  const file = await import(`./${slug}.md`);
  return readPost(file.default);
}

export function getAllPostSlugs(): string[] {
  const postPaths = glob.sync('./src/posts/**.md');
  return postPaths.map(filePathToSlug);
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs();
  const readFiles = slugs.map(findBySlug);
  const files = await Promise.all(readFiles);
  const posts = files.map(f => f.post);
  posts.sort((p1, p2) => {
    const date1 = parseISO(p1.publishedAt);
    const date2 = parseISO(p2.publishedAt);
    return compareDesc(date1, date2);
  });
  return posts;
}
