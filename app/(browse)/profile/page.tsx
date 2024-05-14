"use client";

import { signout } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function Page() {
  const logout = async () => {
    await signout(localStorage.getItem("token")!);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
