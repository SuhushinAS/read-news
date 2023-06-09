import {TState} from 'app/types';
import {getList} from 'modules/common/helpers/selectors';
import {feedRedux} from 'modules/feed/reducers';
import {TFeed, TFeedMap, TFeedStore} from 'modules/feed/types';
import {createSelector} from 'reselect';

export const selectFeed = (state: TState): TFeedStore => state[feedRedux.name];

export const selectFeedData = (state: TState): TFeedMap => selectFeed(state).data;

export const selectFeedIdList = (state: TState): string[] => selectFeed(state).list;

export const selectFeedList = createSelector([selectFeedData, selectFeedIdList], getList);

type SelectFeedItem = (id: string) => (state: TState) => TFeed | undefined;
export const selectFeedItem: SelectFeedItem = (id) => (state) => selectFeedData(state)[id];
