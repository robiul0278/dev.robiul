// components/shared/Loader.tsx

import React from "react";
import { Card } from "@/components/ui/card";

const SkeletonCard = () => (
  <Card className="project-card relative overflow-hidden border border-gray-200 dark:border-0 shadow pb-5 pt-20 bg-gray-50 dark:bg-slate-800 animate-pulse">
    {/* <div className="relative h-[296px] w-full rounded-2xl overflow-hidden bg-gray-300 dark:bg-slate-700" /> */}

    <div className="p-6 flex flex-col justify-end space-y-4">
      <div className="h-5 w-2/3 bg-gray-300 dark:bg-slate-600 rounded" />
      <div className="h-4 w-1/2 bg-gray-300 dark:bg-slate-600 rounded" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="h-5 w-12 bg-gray-300 dark:bg-slate-600 rounded-lg"
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <div className="h-8 w-20 bg-gray-300 dark:bg-slate-600 rounded" />
        <div className="h-8 w-20 bg-gray-300 dark:bg-slate-600 rounded" />
      </div>
    </div>
  </Card>
);

const Loader = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Loader;
