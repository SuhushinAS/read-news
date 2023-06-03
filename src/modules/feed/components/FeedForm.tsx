import {useAppDispatch} from 'app/hooks';
import {actionFeedSave} from 'modules/feed/actions';
import {TFeed} from 'modules/feed/types';
import {Button} from 'modules/form/components/Button';
import {Field} from 'modules/form/components/Field';
import {Form} from 'modules/form/components/Form';
import {Input} from 'modules/form/components/Input';
import {Label} from 'modules/form/components/Label';
import {Message} from 'modules/locale/components/Message';
import React, {useCallback} from 'react';
import './FeedItem.less';

type TProps = {
  feed?: TFeed;
};

export const FeedForm = ({feed}: TProps) => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback((values: TFeed) => dispatch(actionFeedSave(values)), [dispatch]);

  if (feed === undefined) {
    return null;
  }

  return (
    <Form defaultValues={feed} onSubmit={onSubmit}>
      <Field
        control={<Input name="src" />}
        label={
          <Label htmlFor="src">
            <Message id="feed.src.label" />
          </Label>
        }
      />
      <Field
        control={<Input name="title" />}
        label={
          <Label htmlFor="title">
            <Message id="feed.title.label" />
          </Label>
        }
      />
      <Button>
        <Message id="form.action.save" />
      </Button>
    </Form>
  );
};
