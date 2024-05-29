import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-md">
        <h2 className="text-center text-3xl text-white">Protected Page</h2>
        <p className="text-center text-white">
          Welcome! This page is only accessible to authenticated users.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
