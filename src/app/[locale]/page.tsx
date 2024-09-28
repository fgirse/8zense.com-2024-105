import Image from "next/image";
import AuthButton from "@/src/components/AuthButton";
import { createClient } from "@/src/utils/supabase/server";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import IntroWebside from "@/src/components/IntroWebside";
import CollapseCardFeatures from "@/src/components/CollapsCardFeature";
import FeatureAnim from "@/src/components/FeatureAnimated";
import Lotticall from "@/src/components/LottiCallToAct";
import { CallToAct } from "@/src/components/CallToAct";
import ColorChangeCards from "@/src/components/ColorChangeCard";
import IlluTestimonial from "@/public/assets/images/illustration.png";
import HorizontalSroll from "@/src/components/HorizontalScrollCarousel";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import {unstable_setRequestLocale} from 'next-intl/server';
const locale:string = "";

export default async function IndexPage({ params: { locale } }: { params: { locale: string } }) {//+
  //... rest of the code//+
//+
 // {"conversationId":"bd2c6c72-eac2-4eed-8220-4912f89325a8","source":"instruct"}
// {"conversationId":"db92e98f-8b76-491a-874b-c43bdb555bd0","source":"instruct"}

  unstable_setRequestLocale(locale);

  const messages =  getMessages();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  

  return (
    <div className="w-[100%] flex-1 flex flex-col gap-2 items-center">
      <nav className="w-[100%] flex justify-center border-b border-b-foreground/10 h-12">
        <div className="w-full  max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-0 max-w-4xl px-3"></div>
      <main className="flex-1 flex flex-col">
        {/*<section className="relative min-h screen"><Hero/></section>*/}

        {/*====================================================grid start ===============*/}

        <section className="w-[100vw] mx-auto bg-neutral-300">
          <div className="relative">
            <Hero/>
          </div>

          <section className="">
            <IntroWebside />
          </section>
          <section className="">

            <NextIntlClientProvider  >
            <CollapseCardFeatures />
            </NextIntlClientProvider>
          </section>

          <section id="section-itworks" className="mt- lg:h-[45vh]">
            <FeatureAnim />
          </section>

          <section id="section-projRef" className="-mt-4 lg:h-[66vh]">
            <div className="bg-black">
              <h1 className="text-center text-white uppercase text-3xl md:text-6xl lg:mb-24  ">
                Referenz Projekte
              </h1>
            </div>

            <ColorChangeCards />
          </section>
          <section className="h-screen">
            {/*<CallToAct />*/}
          </section>

          <section id="section-testimonials" className="-mt-24 lg:h-[70vh]">
            <div className="bg-black mb-7 ">
              <h1 className="text-center text-white uppercase text-3xl md:text-6xllg:mb-24  ">
                Team
              </h1>
            </div>
          </section>

          {/*====================================================grid ende ===============*/}

          <section className="">
            <HorizontalSroll />
          </section>
        </section>
      </main>
    </div>
  );
}
