"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthButton } from "./component/AuthButton";
import Swal from "sweetalert2";
import { signin } from "@/lib/auth";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = await signin(email, password);
    if (user) {
      localStorage.setItem("token", user.data.data.token);
      localStorage.setItem("user", user.data.user);
      Swal.fire({
        icon: "success",
        title: "Success",
        timer: 1500,
        text: "Login success",
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 1500,
        text: "Invalid phone number or password",
      });
    }
  };

  return (
    <>
      <div className="text-black text-2xl font-bold">Tourify</div>
      <Input
        placeholder="Email"
        id="email"
        name="email"
        className="w-56"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Password"
        id="password"
        name="password"
        className="w-56"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <AuthButton label="Login" onclick={handleSubmit} />
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
    </>
  );
}
