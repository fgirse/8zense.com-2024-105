import FetchDataSteps from "@/src/components/tutorial/fetch-data-steps";
import { createClient } from "@/src/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Galery  from "@/src/components/Galeria";
import Galery02 from "@/src/components/Galeria02";

export default async function ProtectedPage() {
   
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const t = await getTranslations ("protected");
  return (
    <div className="bg-slate-100 h-screen flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
        {t("Title_Protected")}
          
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">{t("userDetails")}</h2>
        <div className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
         {t("logged_in")}: {JSON.stringify(user.email, null, 2)}
        </div>
      </div>
      <Galery/>
      <Galery02/>
    </div>
  );
}
