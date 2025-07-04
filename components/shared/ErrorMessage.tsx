import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

interface TErrorResponse {
  message?: string;
  statusCode?: number;
  errorSources?: { message: string }[];
}

function isErrorResponse(data: unknown): data is TErrorResponse {
  return typeof data === "object" && data !== null && "message" in data;
}

interface ErrorMessageProps {
  error?: FetchBaseQueryError | SerializedError;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onRetry }) => {
  let statusCode = "Unknown";
  let message = "Something went wrong.";

  if (error) {
    if ("status" in error) {
      statusCode = String(error.status);

      if (isErrorResponse(error.data)) {
        message = error.data.message || message;
      }
    } else if ("message" in error) {
      message = error.message || message;
    }
  }

  return (
    <section className="py-20 px-4 flex justify-center items-center text-center">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center gap-3 text-red-600 dark:text-red-400">
          <AlertTriangle className="w-6 h-6" />
          <span className="text-xl font-bold">Error {statusCode}</span>
        </div>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {message}
        </p>

        {onRetry && (
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 border-red-500 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer"
            onClick={onRetry}
          >
            <RotateCcw className="w-4 h-4" />
            Retry
          </Button>
        )}
      </div>
    </section>
  );
};

export default ErrorMessage;
