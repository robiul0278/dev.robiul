import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0e0e0e] px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome, Admin!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
        This is your portfolio admin dashboard. Use the sidebar to manage projects,
        and other content.
      </p>
    </div>
  );
};

export default Home;
