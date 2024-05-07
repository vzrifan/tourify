import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Login = () => {
  return (
    <div>
      <Link href="/login">
        <Button className="w-40">Login</Button>
      </Link>
    </div>
  );
};
