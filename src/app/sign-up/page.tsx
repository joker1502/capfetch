import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-24">
      <h1 className="text-3xl font-bold">Create Your Account</h1>
      <p className="mt-2 text-muted-foreground">
        Get 50 free extracts per day when you sign up.
      </p>
      <div className="mt-10 w-full max-w-sm">
        <AuthForm />
      </div>
    </div>
  );
}
