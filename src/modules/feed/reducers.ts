import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/dist/createAction';
import {getId, getNormalize} from 'modules/common/helpers/normalize';
import {feedIdKey} from 'modules/feed/constants';
import {TFeed, TFeedStore} from 'modules/feed/types';

export const getFeedId = getId(feedIdKey);

const normalizeFeed = getNormalize<TFeed>(getFeedId);

const initialState: TFeedStore = {
  data: {},
  list: [],
};

export const feedRedux = createSlice({
  initialState,
  name: 'feed',
  reducers: {
    setItem: (state, {payload}: PayloadAction<TFeed>) => {
      console.log(payload);
      state.data[payload.id] = payload;
    },
    setList: (state, {payload}: PayloadAction<TFeed[]>) => ({...state, ...normalizeFeed(payload)}),
  },
});
