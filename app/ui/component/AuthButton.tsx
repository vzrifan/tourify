"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface AuthButtonProps {
  label: string;
  onclick: () => void;
}

export function AuthButton({ label, onclick }: AuthButtonProps) {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        aria-disabled={pending}
        type="submit"
        className="w-56"
        onClick={onclick}
      >
        {pending ? "Submitting..." : label}
      </Button>
    </div>
  );
}
