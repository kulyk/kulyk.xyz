/* eslint-disable jsx-a11y/anchor-is-valid */

import * as React from 'react';
import NextLink, {LinkProps} from 'next/link';
import classNames from 'classnames';

type Props = LinkProps & {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function Link(props: Props): React.ReactElement {
  const {children, id, className, ...linkProps} = props;
  return (
    <NextLink {...linkProps}>
      <a id={id} className={classNames('page-link', className)}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
