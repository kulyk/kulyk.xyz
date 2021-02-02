import {MdxRemote} from 'next-mdx-remote/types';
import renderMdxToString from 'next-mdx-remote/render-to-string';

type RenderFn = typeof renderMdxToString;

export type MdxSource = MdxRemote.Source;

export function renderToString(
  ...params: Parameters<RenderFn>
): ReturnType<RenderFn> {
  const [source, options] = params;
  return renderMdxToString(source, {
    ...options,
    mdxOptions: {
      ...options?.mdxOptions,
      remarkPlugins: [
        require('remark-toc'),
        [require('@mavrin/remark-typograf'), {locale: ['en-US']}],
        require('remark-gfm'),
        require('remark-external-links'),
        require('@fec/remark-a11y-emoji'),
        [
          require('remark-prism'),
          {
            transformInlineCode: true,
          },
        ],
      ],
      rehypePlugins: [require('rehype-slug')],
    },
  });
}
