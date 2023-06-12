import {appPath} from 'app/constants';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {FeedList} from 'modules/feed/components/FeedList';
import {feedPaths} from 'modules/feed/constants';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {generatePath, Link} from 'react-router-dom';

export const FeedPageList = () => {
  return (
    <div className="box">
      <FeedHead
        linkText={<Message id="home.title" />}
        linkUrl={appPath.home}
        title={<Message id="feed.list.title" />}
      />
      <p>
        <Link to={`${appPath.feed}${generatePath(feedPaths.create)}`}>+</Link>
      </p>
      <FeedList />
    </div>
  );
};
