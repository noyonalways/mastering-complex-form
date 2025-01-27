import { ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { ZodType } from 'zod';

export interface FormProviderProps<T extends FieldValues> {
  children: ReactNode;
  defaultValues?: Partial<T>;
  schema?: ZodType<T>;
  onSubmit: SubmitHandler<T>;
  form?: UseFormReturn<T>;
} 