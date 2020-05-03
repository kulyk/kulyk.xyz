declare module 'nextjs-sitemap-generator' {
  export interface SitemapStyleFile {
    type: string;
    styleFile: string;
  }
  export interface Config {
    alternateUrls?: object;
    baseUrl: string;
    ignoredPaths?: Array<string>;
    extraPaths?: Array<string>;
    ignoreIndexFiles?: Array<string> | boolean;
    ignoredExtensions?: Array<string>;
    pagesDirectory: string;
    nextConfigPath?: string;
    targetDirectory: string;
    pagesConfig?: object;
    sitemapStylesheet?: Array<SitemapStyleFile>;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export default (config: Config): void => {};
}
