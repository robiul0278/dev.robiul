import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoDataProps {
    message?: string;
    onRetry?: () => void;
}

const NoData: React.FC<NoDataProps> = ({
    onRetry,
}) => {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-4 text-center space-y-6 text-gray-600 dark:text-slate-300">
            {/* Simple icon circle as a placeholder illustration */}
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                <RefreshCcw className="w-8 h-8 text-gray-400 dark:text-slate-400 animate-pulse" />
            </div>

            <h2 className="text-2xl font-semibold">No projects available yet.</h2>
            <p className="text-sm text-gray-500 dark:text-slate-400">
                Check back later or try refreshing the page.
            </p>


            {onRetry && (
                <Button
                    variant="outline"
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 text-gray-700 border-gray-300 dark:text-white dark:border-slate-500 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                >
                    <RefreshCcw className="w-4 h-4" />
                    Retry
                </Button>
            )}
        </section>
    );
};

export default NoData;
