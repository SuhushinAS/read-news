import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {SubmitHandler, UseFormProps} from 'react-hook-form/dist/types/form';

type Props = UseFormProps & {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

export const Form = (props: Props) => {
  const {children, defaultValues, onSubmit} = props;
  const form = useForm({defaultValues});

  return <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>;
};
