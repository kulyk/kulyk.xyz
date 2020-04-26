/* eslint-disable jsx-a11y/anchor-is-valid */

import NextLink, {LinkProps} from 'next/link';

type Props = LinkProps & {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function Link(props: Props): React.ReactElement {
  const {children, id, className, ...linkProps} = props;
  return (
    <NextLink {...linkProps}>
      <a id={id} className={className}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
