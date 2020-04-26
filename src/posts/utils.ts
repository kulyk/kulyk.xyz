import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import {Post} from '../types';

type FindResult = {
  post: Post;
  content: string;
};

export async function findBySlug(slug: string): Promise<FindResult> {
  const file = await import(`./${slug}.md`);
  const {data, content} = matter(file.default);
  return {
    post: data as Post,
    content,
  };
}

function filePathToSlug(filePath: string): string {
  return path.basename(filePath, '.md');
}

export function getAllPostSlugs(): string[] {
  const postPaths = glob.sync('./src/posts/**.md');
  return postPaths.map(filePathToSlug);
}
