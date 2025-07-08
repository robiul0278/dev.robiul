'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash, LayoutDashboard, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDeleteProjectMutation, useGetAllProjectQuery } from '@/redux/api/api';
import ErrorMessage from '@/components/shared/ErrorMessage';
import NoData from '@/components/shared/NoData';
import { TGenericErrorResponse, TProjectForm } from '@/types/types';
import { toast } from 'sonner';

export default function ProjectDashboard() {
    const router = useRouter();
    const { data: projects, isLoading, isError, error, refetch } = useGetAllProjectQuery(undefined);
    const [Delete] = useDeleteProjectMutation()



    const handleEdit = (id: string) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.push(`/admin/projects/edit/${id}`);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this project?')) return;

        try {
            const res = await Delete(id).unwrap();
            if (res?.deletedCount === 1) {
                toast.success(`${res.message}`);
            } else {
                toast.error(`${res.message}`);
            }
        } catch (err: unknown) {
            const error = err as { data: TGenericErrorResponse };
            console.log(error);
            toast.error(error?.data?.message || 'Delete failed.');
        }
    };

    if (isLoading) return (
        <div className="flex items-center justify-center h-[60vh]">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
        </div>
    );
    if (isError) return <ErrorMessage error={error} onRetry={() => refetch()} />;
    if (!projects?.data || projects.data.length === 0) {
        return <NoData onRetry={() => refetch()} />;
    }


    return (
        <section className="px-6 py-6 md:px-8 space-y-6">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <LayoutDashboard className="w-6 h-6" />
                    My Projects
                </h2>
                <Button variant='outline' className='cursor-pointer' onClick={() => router.push('/admin/create-project')}>+ Add New</Button>
            </div>

            {/* Projects Table */}
            <div className="rounded-xl border shadow-sm overflow-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="px-6">
                            <TableHead className="px-6 font-semibold text-base">Title</TableHead>
                            <TableHead className="px-6 font-semibold text-base">Tech Stack</TableHead>
                            <TableHead className="px-6 font-semibold text-base">Live Link</TableHead>
                            <TableHead className="px-6 font-semibold text-base">Serial No.</TableHead>
                            <TableHead className="px-6 text-right font-semibold text-base">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.data.map((project: TProjectForm, index: number) => (
                            <TableRow key={index}>
                                <TableCell className="px-6 font-medium ">{project.title}</TableCell>
                                <TableCell className="px-6">
                                    <div className="flex flex-wrap gap-1">
                                        {project.technology.map((tech, index) => (
                                            <Badge key={index} variant="secondary" className="text-sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell className="px-6">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline hover:text-blue-800 text-sm"
                                    >
                                        {new URL(project.liveLink).hostname}
                                    </a>
                                </TableCell>
                                <TableCell className="px-6 font-medium text-lg">{project.serial}</TableCell>
                                <TableCell className="px-6 text-right space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleEdit(project._id as string)}
                                        aria-label="Edit"
                                        className='cursor-pointer'
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => handleDelete(project._id as string)}
                                        aria-label="Delete"
                                        className='cursor-pointer'
                                    >
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
