import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {FeedForm} from 'modules/feed/components/FeedForm';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {selectFeedItem} from 'modules/feed/selectors';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {useParams} from 'react-router-dom';

export const FeedPageEdit = () => {
  const {feedId = ''} = useParams();
  const feed = useAppSelector(selectFeedItem(feedId));

  return (
    <div>
      <FeedHead linkText={<Message id="feed.list.title" />} linkUrl={appPath.feed} title={feed?.title} />
      <FeedForm feed={feed} />
    </div>
  );
};
