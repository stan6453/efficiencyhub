import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-10">
      <SignUp signInUrl="/login" />
    </div>
  );
}