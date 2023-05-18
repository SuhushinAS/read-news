import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction, TApiResponse} from 'modules/common/types';
import {feed} from 'modules/feed/reducers';
import {TFeed, TFeedBase} from 'modules/feed/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

export const actionFeedGetList: TAction<TApiResponse<TFeed[]>> = (dispatch) => {
  dispatch(status.actions.loadStart(feed.actions.getList.type));

  return api
    .requestLocal<TApiResponse<TFeedBase[]>>('/api/v1/feed.json')
    .then(({data}) => ({
      data: data.map((item): TFeed => ({...item, id: btoa(item.src)})),
    }))
    .then(dispatchData(dispatch, feed.actions.getList))
    .then(loadStop(dispatch, feed.actions.getList.type));
};
