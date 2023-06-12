import {appPath} from 'app/constants';
import {useAppDispatch} from 'app/hooks';
import {actionFeedSave} from 'modules/feed/actions';
import {FeedForm} from 'modules/feed/components/FeedForm';
import {FeedHead} from 'modules/feed/components/FeedHead';
import {feedPaths} from 'modules/feed/constants';
import {TFeedBase} from 'modules/feed/types';
import {Message} from 'modules/locale/components/Message';
import React, {useCallback} from 'react';
import {generatePath, useNavigate} from 'react-router-dom';

export const FeedPageCreate = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (feedBase: TFeedBase) => {
      const id = btoa(feedBase.src);

      return dispatch(actionFeedSave({feed: {...feedBase, id}, id})).then(() => {
        navigate(`${appPath.feed}${generatePath(feedPaths.edit, {feedId: id})}`);
      });
    },
    [dispatch, navigate]
  );

  return (
    <div>
      <FeedHead
        linkText={<Message id="feed.list.title" />}
        linkUrl={appPath.feed}
        title={<Message id="form.title.create" />}
      />
      <FeedForm onSubmit={onSubmit} submitTitle={<Message id="form.action.create" />} />
    </div>
  );
};
