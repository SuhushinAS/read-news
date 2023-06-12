import {TFeed, TFeedBase} from 'modules/feed/types';
import {Button} from 'modules/form/components/Button';
import {Field} from 'modules/form/components/Field';
import {Form} from 'modules/form/components/Form';
import {Input} from 'modules/form/components/Input';
import {Label} from 'modules/form/components/Label';
import {Message} from 'modules/locale/components/Message';
import React, {ReactNode} from 'react';
import './FeedItem.less';

type TProps = {
  defaultValues?: TFeed;
  onSubmit: (values: TFeedBase) => void;
  submitTitle: ReactNode;
};

export const FeedForm = ({defaultValues, onSubmit, submitTitle}: TProps) => (
  <Form defaultValues={defaultValues} onSubmit={onSubmit}>
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
    <Button>{submitTitle}</Button>
  </Form>
);
