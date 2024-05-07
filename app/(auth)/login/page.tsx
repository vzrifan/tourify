"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    console.log("Register");
    console.log(username);
    console.log(password);
    router.push("/");
    // TODO Login
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="bg-white h-1/2 flex flex-col items-center justify-center rounded-lg px-12 gap-y-4">
        <div className="text-black text-2xl font-bold">Tourify</div>
        <div>
          <Input placeholder="Username" className="w-56" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <Input placeholder="Password" className="w-56" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <Button className="w-56" onClick={login}>Login</Button>
        </div>
        <div className="self-start text-xs">Login using:</div>
        <Image
          src="/images/logo_google.png"
          width={50}
          height={50}
          alt="logo google"
        />
        <div className="text-xs">
          Didn't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}