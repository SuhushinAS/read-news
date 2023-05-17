import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {feedIdKey} from 'modules/feed/constants';
import {feed, getFeedId} from 'modules/feed/reducers';
import {selectFeedList} from 'modules/feed/selectors';
import {TFeedBase} from 'modules/feed/types';
import {selectLoadItem} from 'modules/status/selectors';
import React from 'react';
import {Link} from 'react-router-dom';
import './FeedList.less';

const fields: Array<keyof TFeedBase> = ['src', 'title'];

export const FeedList = () => {
  const list = useAppSelector(selectFeedList);
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
          {fields.map((field) => (
            <th className="FeedList__Cell" key={field}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          const itemId = getFeedId(item);
          const encodeItemId = btoa(itemId);
          console.log({encodeItemId, itemId});

          return (
            <tr key={item[feedIdKey]}>
              {fields.map((field) => (
                <td className="FeedList__Cell" key={field}>
                  <Link to={`${appPath.feed}/${itemId}`}>{`${item[field]}`}</Link>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
