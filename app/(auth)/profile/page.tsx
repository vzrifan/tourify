"use client";

import { signout } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const logout = async () => {
    await signout(localStorage.getItem("token")!);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
