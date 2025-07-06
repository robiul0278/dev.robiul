import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoDataProps {
    onRetry?: () => void;
}

const NoData: React.FC<NoDataProps> = ({
    onRetry,
}) => {
    return (
    <section className="flex flex-col items-center justify-center py-24 px-4 text-center space-y-6 bg-white dark:bg-transparent text-gray-900 dark:text-white">
      {/* Icon circle */}
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center shadow-md">
        <RefreshCcw className="w-8 h-8 text-destructive animate-pulse" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold">No projects available yet.</h2>

      {/* Description */}
      <p className="text-sm text-muted-foreground">
        Check back later or try refreshing the page.
      </p>

      {/* Retry Button */}
      {onRetry && (
        <Button
          variant="outline"
          onClick={onRetry}
          className="gap-2 border-border hover:bg-muted/70 dark:hover:bg-muted/50 transition"
        >
          <RefreshCcw className="w-4 h-4" />
          Retry
        </Button>
      )}
    </section>
    );
};

export default NoData;
