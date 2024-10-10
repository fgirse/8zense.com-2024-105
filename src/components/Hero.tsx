import Image from "next/image";
//import { useTranslations } from 'next-intl';
import React from "react";
import Gsap from "@/src/components/Gsap";

// import { useTranslations } from 'next-intl';
import HeroImage from "@/public/assets/images/interiore13.jpg";
import HeroImageMobile from "@/public/assets/images/Portrait_Kica.png";
import { Locale } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

const locale: string = "en";
const Hero =()=> {
  

  const t = useTranslations("Hero");

  return (
    <section id="section-Hero" className="full ">
      <div className="  flex min-h-screen flex-col items-center">
        <div className=" flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={HeroImage}
            fill={false}
            className="hidden md:block"
            alt="Hero Image desktop"
          />
          
        </div>
        <h1 className="relative mb-8 text-center top- text-2xl leading-3 lg:text-white font-normal uppercase text-neutral-100  sm:text-4xl md:text-6x lg:text-[4.0rem] lg:leading-9 lg:top-10 xl:text-[4.66rem] 2xl:text-[5.166rem] lg:mb-5">
          {t("präTitle")}
                                                            </h1>
        <h1 className="mb-3 relative text-center top-[3vh] text-[8.0rem] font-normal uppercase leading-3 text-slate-500 sm:text-8xl md:text-8xl md:top-3 lg:top-[8vh] lg:text-[10.33rem] lg:font-black lg:leading-3 xl:text-[14.33rem] xl:top-32">
          {t("Title")}
        </h1>

        <p className="relative uppercase top-16 text-center text-[1.23rem] text-neutral-100 sm:text-4xl md:top-3 md:tet-4xl lg:mb-4 lg:top-52 lg:text-center lg:text-5xl lg:font-black">
          {t("postTitle")}
        </p>
        <div className="flex flex-col items-center">
        <Image
            src={HeroImageMobile}
            height={450}
            width={450}
            
            className="block md:hidden"
            alt="Hero Image mobile version"
          /></div>
        <div className="relative top-32 mx-auto size-60 sm:w-72 md:size-1/3 md:top-20 lg:top-72">
          <div className="flex flex-col items-center justify-center">
            {/*<Gsap />*/}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero