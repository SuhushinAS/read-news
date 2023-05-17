import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {getId, getNormalize} from 'modules/common/helpers/normalize';
import {feedIdKey} from 'modules/feed/constants';
import {TFeed, TFeedBase, TFeedStore} from 'modules/feed/types';

export const getFeedId = getId(feedIdKey);
export const getFeedEncodedId = (item: TFeedBase): TFeed => ({...item, id: btoa(item.src)});

const normalizeFeed = getNormalize<TFeed>(getFeedId);

const initialState: TFeedStore = {
  data: {},
  list: [],
};

export const feed = createSlice({
  initialState,
  name: 'feed',
  reducers: {
    getList: (state, {payload}: PayloadAction<{data: TFeedBase[]}>) => {
      const data = payload.data.map(getFeedEncodedId);
      return {...state, ...normalizeFeed(data)};
    },
  },
});
