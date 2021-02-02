import Image from 'next/image';
import hydrateMdx from 'next-mdx-remote/hydrate';
import {Callout} from '../components/Callout';

type HydrateFn = typeof hydrateMdx;

export function hydrate(
  ...params: Parameters<HydrateFn>
): ReturnType<HydrateFn> {
  const [source, options] = params;
  return hydrateMdx(source, {
    ...options,
    components: {
      Callout,
      Image,
    },
  });
}
