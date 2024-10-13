//import React, { useTransition } from "react";
import Image from "next/image";
//import EmailModal from "@/src/components/EmailModal";
import Button from "@/src/components/Button";
import Skizze from "@/public/assets/images/skizze.png";
import Skizze2 from "@/public/assets/images/scetch.png";
import { useTranslations } from "next-intl";
import Space from "@/public/assets/images/space02.svg";

const IntroWebside = () => {
  const t = useTranslations("introWebside");

  return (
    <>
      <section className="bg-slate-700 ">
        <div className="grid-rows-16 grid grid-cols-12 gap-1">
          <div className="col-span-7 col-start-1 row-span-3 row-start-4"></div>

          <div className="relative col-span-6 col-start-7 row-span-7 row-start-1 mr-5 px-1">
            <p className="mb-5 mt-7 rounded-xl bg-slate-900 px-3 py-1 text-right text-[1.6rem] leading-7 text-slate-50 sm:text-2xl md:text-[2.33rem] md:font-semibold md:leading-9 lg:mr-12 lg:p-5 lg:px-5 lg:py-3 lg:text-6xl lg:font-semibold">
              {t("zitat")}
            </p>

            <div className="relative -top-2 left-10 flex h-16 w-16 translate-x-16 transform flex-col items-center justify-center rounded-full  mt-2 text-xs leading-3 text-white shadow-xl shadow-gray-400/50 sm:h-20 sm:w-20 sm:text-2xl md:-top-1 md:h-24 md:w-24 md:translate-x-44 md:transform md:text-2xl lg:left-2/4 lg:h-32 lg:w-32 lg:text-3xl">
         <p className="mt-4 relative z-10 text-[3.0rem] font-black md:text-5xl md:leading-4 lg:text-6xl">
              🇵🇹
              </p>

              <p className="text-sm font-black md:text-2xl md:leading-4 lg:text-3xl">
              
              </p>
            </div>
          </div>
        </div>

        <section className="h-33vh mx-auto lg:w-2/3 lg:bg-[url('/assets/images/space02.svg')] lg:bg-contain lg:bg-no-repeat">
         

          <section className="container mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 lg:grid-cols-1">
            <h1 className=" lg:top lg:leading-0 relative -top-20 bg-aelllijoi
              {t("text01")}
            </h1>

            {/*<div className="relative -top-20 h-[24vh] w-[75vw] lg:w-[45vw]">
              <Image src={Skizze} fill sizes="100vw" alt="Skizze" />
            </div>*/}
            

            <p className="-mt-24 text-base text-slate-700 md:my-6 md:text-lg">
            
              {t("text02")}
            </p>
          </section>

          <div className="bg-slate-300 mb-20 flex flex-col">
            {/*<EmailModal />*/}
          </div>

          
        </section>

        {/*  <section className="shuffle-Hero -mt-44 ">*/}
      </section>
    </>
  );
};

export default IntroWebside;
