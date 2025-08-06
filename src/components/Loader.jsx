import React from "react";

const LoadingSkeleton = ({ className }) => (
  <div className={`loading-skeleton ${className}`}></div>
);

const Loader = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-64 bg-white shadow-lg p-4">
        <LoadingSkeleton className="h-12 mb-4" />
        {[...Array(8)].map((_, i) => (
          <LoadingSkeleton key={i} className="h-10 mb-2" />
        ))}
      </div>
      <div className="flex-1 p-6">
        <LoadingSkeleton className="h-8 w-64 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <LoadingSkeleton key={i} className="h-32" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <LoadingSkeleton key={i} className="h-64" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
