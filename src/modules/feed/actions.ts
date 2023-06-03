import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction, TActionData, TApiResponse} from 'modules/common/types';
import {feedRedux} from 'modules/feed/reducers';
import {TFeed, TFeedBase} from 'modules/feed/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

export const actionFeedGetList: TAction<TFeed[]> = (dispatch) => {
  dispatch(status.actions.loadStart(feedRedux.actions.setList.type));

  return api
    .requestLocal<TApiResponse<TFeedBase[]>>('/api/v1/feed.json')
    .then(({data}) => data.map((item): TFeed => ({...item, id: btoa(item.src)})))
    .then(dispatchData(dispatch, feedRedux.actions.setList))
    .then(loadStop(dispatch, feedRedux.actions.setList.type));
};

export const actionFeedSave: TActionData<TFeed, TFeed> = (feed) => (dispatch) => {
  dispatch(feedRedux.actions.setItem(feed));

  return Promise.resolve(feed);
};
