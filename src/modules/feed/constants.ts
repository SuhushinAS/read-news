import {TFeed} from 'modules/feed/types';

export const feedPaths = {
  item: '/:id',
  list: '/',
};

export const feedIdKey = 'id';

export const feedFields: Array<keyof TFeed> = ['src', 'title'];
