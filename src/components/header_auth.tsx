import { signOutAction } from "@/src/app/[locale]/actions";
import { hasEnvVars } from "@/src/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/src/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    
    <div className="ml-6 rounded-xl text-xs text-slate-700 flex items-center gap-x-5">

      <form action={signOutAction}>
        <Button type="submit" variant={"default"} className="text-white bg-slate-400 hover:bg-slate-500">
          Sign out
        </Button>
      </form>
  
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"default"} className="bg-orange-400 text-white hover:bg-orange-600">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"} className="bg-lime-400 text-white hover:bg-lime-600" >
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}