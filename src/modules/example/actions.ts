import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction} from 'modules/common/types';
import {example} from 'modules/example/reducers';
import {TExample} from 'modules/example/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';

export const actionExampleGetList: TAction<TExample[]> = (dispatch) => {
  dispatch(status.actions.loadStart(example.actions.setList.type));

  return api
    .requestLocal<TExample[]>('/api/v1/example.json')
    .then(dispatchData(dispatch, example.actions.setList))
    .then(loadStop(dispatch, example.actions.setList.type));
};
