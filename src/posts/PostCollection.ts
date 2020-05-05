import fs from 'fs';
import path from 'path';
import {promisify} from 'util';
import glob from 'glob';
import matter from 'gray-matter';
import {compareDesc, parseISO} from 'date-fns';
import {Post} from './Post';

const readFileAsync = promisify(fs.readFile);

type ParsedPost = {
  post: Post;
  content: string;
};

class BasePostCollection {
  private filePathToSlug(filePath: string): string {
    return path.basename(filePath, '.md');
  }

  private parsePost(file: string): ParsedPost {
    const {data, content} = matter(file);
    return {
      post: data as Post,
      content,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async readPostFile(_filePath: string): Promise<string> {
    throw new TypeError('Overwrite the readPostFile method');
  }

  async findBySlug(slug: string): Promise<ParsedPost> {
    const file = await this.readPostFile(slug);
    return this.parsePost(file);
  }

  getAllPostSlugs(): string[] {
    const postPaths = glob.sync('./src/posts/**/*.md');
    return postPaths.map(filePath => this.filePathToSlug(filePath));
  }

  async getAllPostsWithContent(): Promise<ParsedPost[]> {
    const slugs = this.getAllPostSlugs();
    const readFiles = slugs.map(slug => this.findBySlug(slug));
    const files = await Promise.all(readFiles);
    files.sort((p1, p2) => {
      const date1 = parseISO(p1.post.publishedAt);
      const date2 = parseISO(p2.post.publishedAt);
      return compareDesc(date1, date2);
    });
    return files;
  }

  async getAllPosts(): Promise<Post[]> {
    const files = await this.getAllPostsWithContent();
    return files.map(f => f.post);
  }
}

export class PostCollection extends BasePostCollection {
  protected async readPostFile(slug: string): Promise<string> {
    const file = await import(`./content/${slug}.md`);
    return file.default;
  }
}

export class PostCollectionScripted extends BasePostCollection {
  protected async readPostFile(slug: string): Promise<string> {
    const filePath = path.join(__dirname, `./content/${slug}.md`);
    return readFileAsync(filePath, {encoding: 'utf8'});
  }
}
