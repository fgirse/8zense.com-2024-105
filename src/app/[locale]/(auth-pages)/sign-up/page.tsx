import { signUpAction } from "@/src/app/[locale]/actions";
import { FormMessage, Message } from "@/src/components/form-message";
import { SubmitButton } from "@/src/components/submit-button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logoPet.svg";
import { SmtpMessage } from "@/src/app/[locale]/(auth-pages)/smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className=" mt-4 w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
    <div className=" mt-4  flex-col items-center w-36 j">
        <Image src={Logo} alt="Logo" height={300}  />
    </div>
      <form className="bg-slate-500 rounded-xl px-3 py-3 flex flex-col min-w-64 max-w-64 mx-auto mb-12">
        <h1 className="mt-3 text-2xl text-lime-400 font-medium">Sign up</h1>
        <p className="text-sm">
          Already have an account?{" "}
          <Link className="text-orange-300 hover:text-orange-400 font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="text-slate-400 flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton className="bg-orange-300 hover:bg-orange-400                                       M" formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}