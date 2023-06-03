import {createSlice} from '@reduxjs/toolkit';
import type {TLocaleStore} from 'modules/locale/types';

const initialState: TLocaleStore = {
  current: '',
  data: {},
  list: [],
};

export const locale = createSlice({
  initialState,
  name: 'locale',
  reducers: {
    setCurrent: (state, {payload}) => {
      state.current = payload;
    },
    setList: (state, {payload}) => {
      state.list = payload.list;
    },
    setMessages: (state, {payload}) => {
      const {data, language} = payload;

      state.data[language] = data;
    },
  },
});
