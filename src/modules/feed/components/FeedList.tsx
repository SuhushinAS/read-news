import {useAppSelector} from 'app/hooks';
import {FeedListItem} from 'modules/feed/components/FeedListItem';
import {feedFields} from 'modules/feed/constants';
import {feed} from 'modules/feed/reducers';
import {selectFeedIdList} from 'modules/feed/selectors';
import {selectLoadItem} from 'modules/status/selectors';
import React from 'react';
import './FeedList.less';

export const FeedList = () => {
  const idList = useAppSelector(selectFeedIdList);
  const load = useAppSelector(selectLoadItem(feed.actions.getList.type));

  if ('undefined' === typeof load) {
    return null;
  }

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <table className="FeedList">
      <thead>
        <tr>
          {feedFields.map((field) => (
            <th className="FeedList__Cell" key={field}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {idList.map((feedId) => (
          <FeedListItem feedId={feedId} key={feedId} />
        ))}
      </tbody>
    </table>
  );
};
