"use client";
import { useActionState } from "react"; // Updated to useActionState
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
};

const FormContainer = ({ action, children }) => {
  const [state, formAction] = useActionState(action, initialState); // Updated to useActionState
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
