import {TFeed} from 'modules/feed/types';

export const feedPaths = {
  edit: '/edit/:feedId',
  list: '/',
  view: '/view/:feedId',
};

export const feedIdKey = 'id';

export const feedFields: Array<keyof TFeed> = ['src', 'title'];
