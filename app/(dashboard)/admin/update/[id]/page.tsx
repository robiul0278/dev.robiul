'use client';

import { useForm } from 'react-hook-form';
import { useGetSingleProjectQuery, useUpdateProjectMutation } from '@/redux/api/api';
import { toast } from 'sonner';
import { TGenericErrorResponse, TProjectForm } from '@/types/types';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import UpdateForm from '@/components/dashboard/update-form';
import { Loader2 } from 'lucide-react';
import ErrorMessage from '@/components/shared/ErrorMessage';
import { use } from 'react';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function UpdateProject({ params }: PageProps) {
  const router = useRouter()
   const { id } = use(params);
  const {data: singleData, isLoading, isError, error} = useGetSingleProjectQuery(id);
  const [Update] = useUpdateProjectMutation();

const form = useForm<TProjectForm>({
  values: singleData?.data || {
    title: '',
    subTitle: '',
    liveLink: '',
    frontend: '',
    backend: '',
    image: '',
    technology: [],
    serial: '',
  },
});

  const onSubmit = async (data: TProjectForm) => {
    try {
      const result = await Update(data).unwrap();
      if (result?.statusCode === 200) {
        toast.success(`${result?.message}`);
        router.push("/admin/all-project")
      } else {
        toast.error('⚠️ Project update failed. Please try again.');
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

   if (isLoading) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin w-8 h-8 text-muted-foreground" />
    </div>
  );
}

  if (isError) return <ErrorMessage error={error}  />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Update Project</h1>

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
        <UpdateForm
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
