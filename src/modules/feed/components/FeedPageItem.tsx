import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {FeedItem} from 'modules/feed/components/FeedItem';
import {selectFeedItem} from 'modules/feed/selectors';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {useParams} from 'react-router-dom';

export const FeedPageItem = () => {
  const {id = ''} = useParams();
  const feed = useAppSelector(selectFeedItem(id)) || {};

  return (
    <div>
      <FeedHead linkText={<Message id="feed.list.title" />} linkUrl={appPath.feed} title={feed.title} />
      <FeedItem feed={feed} />
    </div>
  );
};
