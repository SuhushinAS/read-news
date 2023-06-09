import {config} from 'modules/config/redux';
import {example} from 'modules/example/reducers';
import {feedRedux} from 'modules/feed/reducers';
import {locale} from 'modules/locale/reducers';
import {status} from 'modules/status/reducers';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  [config.name]: config.reducer,
  [example.name]: example.reducer,
  [feedRedux.name]: feedRedux.reducer,
  [locale.name]: locale.reducer,
  [status.name]: status.reducer,
});
