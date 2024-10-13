import Image from "next/image";
//import { useTranslations } from 'next-intl';
import React from "react";
import Gsap from "@/src/components/Gsap";

// import { useTranslationq55s } from 'next-intl';
import HeroImage from "@/public/assets/images/Kica08.png";
import HeroImageMobile from "@/public/assets/images/Kica08.png";
import { Locale } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";
import Banner from "@/src/components/Banner";
const locale: string = "en";
const Hero =()=> {
  

  const t = useTranslations("Hero");

  return (
    <section id="section-Hero" className="bg-slate-700 full ">
      <div className="  flex min-h-screen flex-col items-center md:flex-row">
       <Banner/>
        <div className=" flex items-center justify-center p-6 md:w-4/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={HeroImage}
            width={700}
            height={450}
            className="hidden md:block"
            alt="Hero Image desktop"
          />
          
        </div>
        <div className="flex-col items-center justify-center p-6 md:w-4/5 md:px-28 md:py-12">
        <h1 className="relative mb-2 text-center -top-5 text-[2.33rem] leading-9 lg:text-white font-normal uppercase text-neutral-100  sm:text-4xl md:text-6x lg:mb7 lg:text-[5.0rem] lg:leading-10 lg:top-1 xl:text-[4.66rem] 2xl:text-[5.166rem] lg:mb-5">
          {t("präTitle")}
                                                            </h1>
        <h1 className="mb-3 relative text-center -top-[3vh] text-[10.0rem] font-normal uppercase leading-3 text-slate-500 sm:text-8xl md:text-8xl md:top-3 lg:top-[8vh] lg:text-[15.33rem] lg:font-black lg:leading-3 xl:text-[14.33rem] xl:top-32">
          {t("Title")}
        </h1>

        <p className="relative uppercase top6 text-center text-[2.2663rem] leading-8 text-neutral-100 sm:text-4xl md:top-3 md:tet-4xl lg:mb-4 lg:top-52 lg:text-center lg:text-5xl lg:font-black">
          {t("postTitle")}
        </p>
        </div>
        <div className="flex flex-col items-center">
        <Image
            src={HeroImageMobile}
            height={650}
            width={850}
            
            className="block md:hidden"
            alt="Hero Image mobile version"
          />
          
          </div>
        
        
      </div>
    </section>
  );0
}
export default Hero