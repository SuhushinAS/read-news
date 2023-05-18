import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {feedFields} from 'modules/feed/constants';
import {selectFeedItem} from 'modules/feed/selectors';
import React from 'react';
import {Link} from 'react-router-dom';
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
          <Link to={`${appPath.feed}/${feedId}`}>{`${feed[field]}`}</Link>
        </td>
      ))}
    </tr>
  );
};
