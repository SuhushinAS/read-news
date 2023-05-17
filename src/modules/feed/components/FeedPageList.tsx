import {appPath} from 'app/constants';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {FeedList} from 'modules/feed/components/FeedList';
import {Message} from 'modules/locale/components/Message';
import React from 'react';

export const FeedPageList = () => {
  return (
    <div>
      <FeedHead
        linkText={<Message id="home.title" />}
        linkUrl={appPath.home}
        title={<Message id="feed.list.title" />}
      />
      <FeedList />
    </div>
  );
};
