import Heading from "@/global/components/Shared/Heading";
import DashboardLayout from "@/global/layouts/DashboardLayout";
import React from "react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="w-[400px] mx-auto text-center mt-40">
        {/* Your dashboard content goes here */}
        <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
