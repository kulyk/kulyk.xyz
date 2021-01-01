import hydrateMdx from 'next-mdx-remote/hydrate';
import {DEFAULT_COMPONENTS} from './defaults';

type HydrateFn = typeof hydrateMdx;

export function hydrate(
  ...params: Parameters<HydrateFn>
): ReturnType<HydrateFn> {
  const [source, options] = params;
  return hydrateMdx(source, {
    ...options,
    components: {
      DEFAULT_COMPONENTS,
      ...options?.components,
    },
  });
}
