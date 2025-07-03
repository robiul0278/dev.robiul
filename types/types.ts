type TErrorSource = {
  path: string;
  message: string;
};

export type TGenericErrorResponse = {
  success?: boolean;
  statusCode: number;
  message: string;
  errorSources: TErrorSource[];
  stack?: string;
};


import { FieldErrors, UseFormRegister, UseFormHandleSubmit, UseFormSetValue, UseFormReturn, Control } from 'react-hook-form';
// Zod schema for validation

export type TProjectForm = {
  title: string;
  subTitle: string;
  image: string;
  technology: string[];
  liveLink: string;
  frontend: string;
  backend: string;
  color: string;
  serial: string;
};

export type TFormProps = {
    onSubmit: (data: TProjectForm) => void;
    register: UseFormRegister<TProjectForm>;
    handleSubmit: UseFormHandleSubmit<TProjectForm>;
    errors: FieldErrors<TProjectForm>;
    isSubmitting: boolean;
    setValue: UseFormSetValue<TProjectForm>;
     form: UseFormReturn<TProjectForm>;
     control: Control<TProjectForm>;
};