import React from 'react';
import {formatPubDate} from '../utils';

function PublishedAt({publishedAt}: {publishedAt: string}): React.ReactElement {
  return <p className="secondary">{formatPubDate(publishedAt)}</p>;
}

export default PublishedAt;
