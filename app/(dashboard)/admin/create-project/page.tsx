'use client';

import { useForm } from 'react-hook-form';

import { useCreateProjectMutation } from '@/redux/api/api';
import CreateProjectForm from '@/components/dashboard/project-form';
import { toast } from 'sonner';
import { TGenericErrorResponse, TProjectForm } from '@/types/types';
import { Form } from '@/components/ui/form';

export default function CreateProject() {
  const [createProject] = useCreateProjectMutation();

const form = useForm<TProjectForm>({
  defaultValues: {
    title: '',
    subTitle: '',
    liveLink: '',
    frontend: '',
    backend: '',
    image: '',
    technology: [],
    color: '',
    serial: '', // or 0 if number
  },
});


  const onSubmit = async (data: TProjectForm) => {
    try {
      const result = await createProject(data).unwrap();

      console.log(result);

      if (result?.statusCode === 200) {
        toast.success(`${result?.message}`);
      } else {
        toast.error('⚠️ Project creation failed. Please try again.');
      }

      console.log('✅ Server response:', result);
    } catch (error: unknown) {
      const err = error as { data: TGenericErrorResponse };

      console.log(err);


      if (err?.data?.errorSources && Array.isArray(err.data.errorSources)) {
        err.data.errorSources.forEach(({ path, message }) => {
          form.setError(path as keyof TProjectForm, {
            type: 'server',
            message,
          });
        });
      } else {
        toast.error(err?.data?.message);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Add a New Project</h1>
          <p className="text-sm mt-1 text-muted-foreground">
            Provide the project title, subtitle, tech stack, and important links
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Date</p>
          <p className="text-sm font-medium text-foreground">
            {new Date().toLocaleDateString('en-GB')}
          </p>
        </div>
      </div>

      <Form {...form}>
        <CreateProjectForm
          onSubmit={onSubmit}
          register={form.register}
          handleSubmit={form.handleSubmit}
          errors={form.formState.errors}
          setValue={form.setValue}
          control={form.control}
          isSubmitting={form.formState.isSubmitting}
          form={form}
        />
      </Form>
    </div>
  );
}
