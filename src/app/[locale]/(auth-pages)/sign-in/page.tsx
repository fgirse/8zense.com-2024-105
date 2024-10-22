import { signInAction } from "@/src/app/[locale]/actions";
import { FormMessage, Message } from "@/src/components/form-message";
import { SubmitButton } from "@/src/components/submit-button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logoPet.svg";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <>
    <div className=" mt-4  flex-col items-center w-36 ">
    <Image src={Logo} alt="Logo" height={300}  />
</div>
    <form className="bg-slate-500 rounded-xl px-3 py-3 flex flex-col min-w-64 max-w-64 mx-auto mb-12">
      <h1 className="text-2xl text-orange-300 font-medium">Sign in</h1>
      <p className="text-sm text-white">
        Don't have an account?{" "}
        <Link className="text-lime-200 hover:text-lime-300 font-medium underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            className="text-xs text-white underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction} className="bg-orange-300 hover:bg-orange-400 text-white">
          Sign in
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
    </>
  );
}