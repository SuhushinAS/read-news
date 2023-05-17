import {TFeedBase} from 'modules/feed/types';
import React from 'react';
import './FeedItem.less';

type TProps = {
  feed: TFeedBase;
};

export const FeedItem = ({feed}: TProps) => {
  return <pre className="FeedItemData">{JSON.stringify(feed, undefined, 2)}</pre>;
};
