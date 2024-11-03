//import React, { useTransition } from "react";
import Image from "next/image";
//import EmailModal from "@/src/components/EmailModal";
import Button from "@/src/components/Button";
import Skizze from "@/public/assets/images/skizze.png";
import Skizze2 from "@/public/assets/images/scetch.png";
import { useTranslations } from "next-intl";
import Travel from "@/public/assets/images/travel2.svg";
import Surprise from "@/public/assets/images/surprise01.png";
import Footsteps from "@/public/assets/images/babyfoot.png";
import Bone from "@/public/assets/images/bone.svg";

const IntroWebside = () => {
  const t = useTranslations("introWebside");

  return (
    <>
      <section className="bg-stone-200 ">
        <div className="grid-rows-16 grid grid-cols-12 gap-1">
          <div className="col-span-7 col-start-1 row-span-3 row-start-4"></div>

          <div className="relative top-0 left-0 col-span-6 col-start-7 row-span-7 row-start-1 px-1">
            <p className="mt-9 text-left mb-5 bowlbySC rounded-xl bg-neutral-700 px-3 py-1 text-[1.6rem] leading-7 text-slate-50 sm:text-2xl md:text-[2.33rem] md:font-semibold md:leading-9 lg:mr-12 lg:px-5 lg:py-3 lg:text-8xl ">
              {t("zitat")}
            </p>

            <div className="relative -top-2 left-10 flex h-16 w-16 translate-x-16 transform flex-col items-center justify-center rounded-full  mt-2 text-8xl leading-3 text-white sm:h-20 sm:w-20 sm:text-2xl md:-top-1 md:h-24 md:w-24 md:translate-x-44 md:transform md:text-2xl lg:left-2/4 lg:h-32 lg:w-32 lg:text-3xl">
              <p className="mt-4 relative z-10 text-[9.0rem] font-black md:text-5xl md:leading-4 lg:text-[13rem]">
                🇵🇹
              </p>
            </div>
          </div>
        </div>

        <section className="h-33vh mx-auto lg:w-2/3">
          <section className="container mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 lg:grid-cols-1">
            <h1 className="text-4xl headingE  lg:top lg:leading-0 relative -top-20 text-white md:text-[3.0rem] lg:leading-9 lg:text-[6.33rem]">
              {t("text01")}
            </h1>
            {/*<div className="relative -top-20 h-[24vh] w-[75vw] lg:w-[45vw]">
              <Image src={Skizze} fill sizes="100vw" alt="Skizze" />
            </div>*/}
            <p className="-mt-24 text-base lg:w-[33vw] headingB2 lg:text-2xl text-slate-200 md:my-6 md:text-lg">
              {t("text02")}
            </p>
            <div className="relative -top-8 right-16 w-56 h-56 ">
              <Image src={Footsteps} alt="babyfoot" width={400} height={300} />
            </div>
            <div className="relative -top-24 left-52 w-36 ">
              <Image src={Bone} alt="Knochen" width={500} height={500} />
            </div>
            <p className="text-left bowlbySC uppercase rounded-xl bg-neutral-700 px-3 py-1 text-[1.6rem] leading-7 text-slate-50 sm:text-2xl md:text-[2.33rem] md:font-semibold md:leading-9 lg:mr-12 lg:p-5 lg:px-5 lg:py-3 lg:text-6xl lg:font-semibold">
              {t("zitat02")}
            </p>
            <div className=" inline-flex">
              <p className="relative z-10 text-[9.0rem] font-black md:text-7xl md:leading-4 lg:text-9xl">
                🇵🇹
              </p>
              <div className="w-[30vw] h-[30vh] mt-12">
                <Image
                  src={Travel}
                  alt="illustration travel"
                  width={600}
                  height={600}
                />
              </div>
              <p className="relative z-10 text-[9.0rem] font-black md:text-5xl md:leading-4 lg:text-[9rem] lg:mt-16 ">
                🇨🇭
              </p>
            </div>
            <h1 className="uppercase text-[2.0rem] headingE text-white md:my-6 md:text-lg">
              {t("text03")}
            </h1>
            <p className="text-base archidaught headingB2 lg:w-1/2 text-slate-200 md:my-6 md:text-lg lg:text-2xl">
              {t("text04")}
            </p>
            <div className="relative -top-8 transform translate-x-24 w-56 h-56 ">
              <Image src={Footsteps} alt="babyfoot" width={400} height={300} />
            </div>{" "}
            <p className="uppercase bowlbySC text-right rounded-xl bg-neutral-700 px-3 py-1 text-[1.6rem] leading-7 text-slate-50 sm:text-2xl md:text-[2.33rem] md:font-semibold md:leading-9 lg:mr-12 lg:p-5 lg:px-5 lg:py-3 lg:text-6xl lg:font-semibold">
              {t("zitat02")}
            </p>
            <div className=" inline-flex">
              <p className="relative z-10 text-[8.0rem] font-black md:text-5xl md:leading-4 lg:text-6xl"></p>

              <div className="w-52 h-52 lg:w-[12vw] lg:h-[12vh]">
                <Image
                  src={Surprise}
                  alt="illustration travel"
                  width={700}
                  height={700}
                />
              </div>
              <p className="relative z-10 text-[9.0rem] font-black md:text-5xl md:leading-4 lg:text-[9rem]">
                🇨🇭
              </p>
            </div>
            <p className="lg:mt-9 text-[1.66rem] text-white headingE md:my-6 md:text-lg lg:text-[5rem] lg:leading-9">
              {t("text05")}
            </p>
            <h1 className="headingB2 text-xl lg:w-2/3 text-white md:my-6 md:text-lg lg:text-2xl">
              {t("text06")}
            </h1>
            <div className="mx-auto bg-gradient-to-b from-slate-800 to bg-black w-[50vw]  flex flex-col justify-center items-center">
              <p className="text-3xl text-center text-orange-300 bowlbySC md:text-6xl lg:text-[7rem] ">
                {t("text07")}
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default IntroWebside;
