import {TFeed} from 'modules/feed/types';
import {Form} from 'modules/form/components/Form';
import React, {useCallback} from 'react';
import './FeedItem.less';

type TProps = {
  feed?: TFeed;
};

export const FeedForm = ({feed}: TProps) => {
  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  if (feed === undefined) {
    return null;
  }

  return (
    <Form defaultValues={feed} onSubmit={onSubmit}>
      <button>submit</button>
    </Form>
  );
};
