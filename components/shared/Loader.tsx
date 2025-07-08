"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  const cards = new Array(4).fill(0); // Display 4 skeleton cards

  return (
    <section className="py-16 relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Title Skeleton */}
        <div className="text-center mb-5 md:mb-16 lg:mb-10">
          <Skeleton className="h-8 md:h-10 w-64 mx-auto mb-2" />
          <Skeleton className="h-5 w-80 md:w-96 mx-auto" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((_, index) => (
            <Card
              key={index}
              className="w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-sm dark:bg-slate-900"
            >
              {/* Image Skeleton */}
              <div className="h-48 sm:h-56 w-full overflow-hidden rounded-t-xl">
                <Skeleton className="h-full w-full" />
              </div>

              <CardContent className="px-3 space-y-3 pt-4">
                <CardHeader className="p-0 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <Skeleton className="h-5 w-14 rounded" />
                  <Skeleton className="h-5 w-10 rounded" />
                  <Skeleton className="h-5 w-16 rounded" />
                </div>
              </CardContent>

              {/* Footer Buttons Skeleton */}
              <CardFooter className="flex justify-between gap-2 p-3 pt-0">
                <Skeleton className="h-8 w-20 rounded-md" />
                <Skeleton className="h-8 w-24 rounded-md" />
                <Skeleton className="h-8 w-24 rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loader;
