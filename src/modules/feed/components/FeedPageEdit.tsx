import {appPath} from 'app/constants';
import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionFeedSave} from 'modules/feed/actions';
import {FeedForm} from 'modules/feed/components/FeedForm';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {feedPaths} from 'modules/feed/constants';
import {selectFeedItem} from 'modules/feed/selectors';
import {TFeedBase} from 'modules/feed/types';
import {Message} from 'modules/locale/components/Message';
import React, {useCallback} from 'react';
import {generatePath, useNavigate, useParams} from 'react-router-dom';

export const FeedPageEdit = () => {
  const {feedId = ''} = useParams();
  const feed = useAppSelector(selectFeedItem(feedId));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (feedBase: TFeedBase) => {
      const id = btoa(feedBase.src);

      return dispatch(actionFeedSave({feed: {...feedBase, id}, id: feedId})).then(() => {
        navigate(`${appPath.feed}${generatePath(feedPaths.edit, {feedId: id})}`);
      });
    },
    [dispatch, feedId, navigate]
  );

  if (feed === undefined) {
    return null;
  }

  return (
    <div>
      <FeedHead linkText={<Message id="feed.list.title" />} linkUrl={appPath.feed} title={feed?.title} />
      <FeedForm defaultValues={feed} onSubmit={onSubmit} submitTitle={<Message id="form.action.save" />} />
    </div>
  );
};
