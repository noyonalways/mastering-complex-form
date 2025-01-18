import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  FormProvider as RHFProvider,
  useForm,
} from "react-hook-form";
import { FormProviderProps } from "../../types";

const FormProvider = <T extends FieldValues>({
  children,
  defaultValues,
  schema,
  onSubmit,
  form,
}: FormProviderProps<T>) => {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    resolver: schema ? zodResolver(schema) : undefined,
  });

  const formMethods = form || methods;

  return (
    <RHFProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </RHFProvider>
  );
};

export default FormProvider;
