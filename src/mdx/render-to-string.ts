import renderMdxToString from 'next-mdx-remote/render-to-string';
import {DEFAULT_COMPONENTS} from './defaults';

type RenderFn = typeof renderMdxToString;

export function renderToString(
  ...params: Parameters<RenderFn>
): ReturnType<RenderFn> {
  const [source, options] = params;
  return renderMdxToString(source, {
    ...options,
    components: {
      DEFAULT_COMPONENTS,
      ...options?.components,
    },
  });
}
