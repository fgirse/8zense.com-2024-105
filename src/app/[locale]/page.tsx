import Image from "next/image";
import AuthButton from "@/src/components/AuthButton";
import { createClient } from "@/src/utils/supabase/server";
import Header from "@/src/components/Header";
import Hero03 from "@/src/components/Hero03";
import IntroWebside from "@/src/components/IntroWebside";
import CollapseCardFeatures from "@/src/components/CollapsCardFeature";
import FeatureAnim from "@/src/components/FeatureAnimated";
import Lotticall from "@/src/components/LottiCallToAct";
import { CallToAct } from "@/src/components/CallToAct";
import ColorChangeCards from "@/src/components/ColorChangeCard";
import IlluTestimonial from "@/public/assets/images/illustration.png";
import Caroussel from "@/src/components/Carousel";
import Hero02 from "@/src/components/Hero02";
import Carousel2 from "@/src/components/Caroussel_2";
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

  
  

  return (
    <div className="w-[100%] flex-1 flex flex-col gap-2 items-center">

      <div className="flex-1 flex flex-col gap-0 max-w-4xl px-3"></div>
      <main className="flex-1 flex flex-col">
        {/*<section className="relative min-h screen"><Hero/></section>*/}

        {/*====================================================grid start ===============*/}

        <section className="w-[100vw] mx-auto bg-slate-800">
          <div className="relative">
            <Hero03/>
          </div>

          <section className="">
            <Hero02 />
          </section>
          <section className="">
          </section>
          {/*====================================================grid ende ===============*/}

        <section className="">
            <IntroWebside/>
          </section>
          <section>
            <Carousel2/>
          </section>
        </section>
      </main>
    </div>
  );
}
