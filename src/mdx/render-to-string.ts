import renderMdxToString from 'next-mdx-remote/render-to-string';

type RenderFn = typeof renderMdxToString;

export function renderToString(
  ...params: Parameters<RenderFn>
): ReturnType<RenderFn> {
  const [source, options] = params;
  return renderMdxToString(source, options);
}
