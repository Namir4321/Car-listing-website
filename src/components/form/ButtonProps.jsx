'use client'
import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
export const SubmitButton = ({ className, text, btnsize, variant }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={variant || "default"}
      disabled={pending}
      className={`capitalize ${className}`}
      size={btnsize || "default"}
    >
      {pending ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : text}
    </Button>
  );
};
