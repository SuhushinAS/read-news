import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {feedFields, feedPaths} from 'modules/feed/constants';
import {selectFeedItem} from 'modules/feed/selectors';
import React from 'react';
import {generatePath, Link} from 'react-router-dom';
import './FeedList.less';

type Props = {
  feedId: string;
};

export const FeedListItem = ({feedId}: Props) => {
  const feed = useAppSelector(selectFeedItem(feedId));

  return (
    <tr>
      {feedFields.map((field) => (
        <td className="FeedList__Cell" key={field}>
          <Link to={`${appPath.feed}${generatePath(feedPaths.view, {feedId})}`}>{`${feed[field]}`}</Link>
        </td>
      ))}
      <td className="FeedList__Cell">
        <Link to={`${appPath.feed}${generatePath(feedPaths.edit, {feedId})}`}>e</Link>
      </td>
    </tr>
  );
};
