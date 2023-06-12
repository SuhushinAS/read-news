import {appPath} from 'app/constants';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionFeedDelete} from 'modules/feed/actions';
import {feedFields, feedPaths} from 'modules/feed/constants';
import {selectFeedItem} from 'modules/feed/selectors';
import {Button} from 'modules/form/components/Button';
import React, {useCallback} from 'react';
import {generatePath, Link} from 'react-router-dom';
import './FeedList.less';

type Props = {
  feedId: string;
};

export const FeedListItem = ({feedId}: Props) => {
  const feed = useAppSelector(selectFeedItem(feedId));
  const dispatch = useAppDispatch();

  const onDelete = useCallback(() => dispatch(actionFeedDelete(feedId)), [dispatch, feedId]);

  if ('undefined' === typeof feed) {
    return null;
  }

  return (
    <tr>
      {feedFields.map((field) => (
        <td className="FeedList__Cell" key={field}>
          <Link to={`${appPath.feed}${generatePath(feedPaths.view, {feedId})}`}>{`${feed[field]}`}</Link>
        </td>
      ))}
      <td className="FeedList__Cell">
        <Link to={`${appPath.feed}${generatePath(feedPaths.edit, {feedId})}`}>*</Link>
      </td>
      <td className="FeedList__Cell">
        <Button onClick={onDelete} type="button">
          -
        </Button>
      </td>
    </tr>
  );
};
