import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { signup } from "@/lib/auth";
import { AuthButton } from "./component/AuthButton";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useState } from "react";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const user = await signup(name, email, password);
    if (user.data) {
      // localStorage.setItem("token", user.data.data.token);
      // localStorage.setItem("user", user.data.user);
      Swal.fire({
        icon: "success",
        title: "Success",
        timer: 1500,
        text: "Register success",
      });
      router.push("/login");
    } else {
      let errorMessages = "";
      if (user.errors.name && user.errors.name.length > 0) {
        errorMessages += user.errors.name.join("\n");
      }
      if (user.errors.email && user.errors.email.length > 0) {
        errorMessages += user.errors.email.join("\n");
      }
      if (user.errors.password && user.errors.password.length > 0) {
        for (let i = 0; i < user.errors.password.length; i++) {
          errorMessages += user.errors.password[i] + "\n";
        }
      }
      if (user.messages) {
        errorMessages += user.messages;
      }
      console.log(user);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        timer: 1500,
        text: errorMessages,
      });
    }
  };

  return (
    <>
      <div className="text-black text-2xl font-bold">Tourify</div>
      <Input
        id="name"
        name="name"
        placeholder="Nama"
        className="w-56"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        id="email"
        name="email"
        placeholder="Email"
        className="w-56"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        className="w-56"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        id="confirmation_password"
        name="confirmation_password"
        placeholder="Confirmation Password"
        type="password"
        className="w-56"
        onChange={(e) => setPassword(e.target.value)}
      />

      <AuthButton label="Register" onclick={handleSubmit} />
      <div className="self-start text-xs">Login using:</div>
      <Image
        src="/images/logo_google.png"
        width={50}
        height={50}
        alt="logo google"
      />
      <div className="text-xs">
        Already have an account?
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </>
  );
}
