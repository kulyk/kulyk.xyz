export interface Post extends Record<string, unknown> {
  title: string;
  emoji: string;
  slug: string;
  banner: string;
  description?: string;
  publishedAt: string;
}
