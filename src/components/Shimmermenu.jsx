import React from 'react';

// Shimmer component
const Shimmermenu = () => {
  return (
    <div className="p-4 bg-white shadow-md">
      <div className="menu-header mb-4">
        <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded w-1/4"></div>
      </div>

      <div className="menu-main">
        <div className="h-6 bg-gray-300 animate-pulse rounded w-1/4 mb-2"></div>
        <div className="h-6 bg-gray-300 animate-pulse rounded w-1/3 mb-4"></div>

        <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="menu-card p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm"
            >
              <div className="h-4 bg-gray-300 animate-pulse rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmermenu;
