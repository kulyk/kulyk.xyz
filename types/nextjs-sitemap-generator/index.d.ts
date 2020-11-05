declare module 'nextjs-sitemap-generator' {
  export interface SitemapStyleFile {
    type: string;
    styleFile: string;
  }
  export interface Config {
    alternateUrls?: Record<string, unknown>;
    baseUrl: string;
    ignoredPaths?: Array<string | RegExp>;
    extraPaths?: Array<string>;
    ignoreIndexFiles?: Array<string> | boolean;
    ignoredExtensions?: Array<string>;
    pagesDirectory: string;
    nextConfigPath?: string;
    targetDirectory: string;
    pagesConfig?: Record<string, {priority?: number; changefreq: string}>;
    sitemapStylesheet?: Array<SitemapStyleFile>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  export default (config: Config): void => {};
}
