import React from 'react';
import {DeepPartial, FieldValues, FormProvider, useForm} from 'react-hook-form';
import {SubmitHandler, UseFormProps} from 'react-hook-form/dist/types/form';

type Props<Values extends FieldValues> = UseFormProps & {
  children: React.ReactNode;
  defaultValues: DeepPartial<Values>;
  onSubmit: SubmitHandler<Values>;
};

export const Form = <Values extends FieldValues>(props: Props<Values>) => {
  const {children, defaultValues, onSubmit} = props;
  const form = useForm<Values>({defaultValues});

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
