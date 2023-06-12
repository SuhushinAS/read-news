import {dispatchData} from 'modules/common/helpers/action';
import {storage} from 'modules/common/helpers/storage';
import {TAction, TActionData} from 'modules/common/types';
import {feedRedux} from 'modules/feed/reducers';
import {TFeed} from 'modules/feed/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

export const actionFeedGetList: TAction<TFeed[]> = (dispatch) => {
  dispatch(status.actions.loadStart(feedRedux.actions.setList.type));

  return storage
    .getList<TFeed>('feed')
    .then(dispatchData(dispatch, feedRedux.actions.setList))
    .then(loadStop(dispatch, feedRedux.actions.setList.type));
};

export const actionFeedSave: TActionData<TFeed[], {id: string; feed: TFeed}> =
  ({id, feed}) =>
  (dispatch) => {
    dispatch(status.actions.loadStart(feedRedux.actions.setItem.type));

    return storage
      .setItem<TFeed>('feed', id, feed)
      .then(dispatchData(dispatch, feedRedux.actions.setList))
      .then(loadStop(dispatch, feedRedux.actions.setItem.type));
  };

export const actionFeedDelete: TActionData<TFeed[], string> = (id) => (dispatch) => {
  dispatch(status.actions.loadStart(feedRedux.actions.setItem.type));

  return storage
    .deleteItem<TFeed>('feed', id)
    .then(dispatchData(dispatch, feedRedux.actions.setList))
    .then(loadStop(dispatch, feedRedux.actions.setItem.type));
};
