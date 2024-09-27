import Image from "next/image";
import LogoEZ from "@/src/components/EZLogo";
import React from "react";
import Logo01 from "@/public/assets/images/LogoEZ990.svg";
import Portrait from "@/public/assets/images/CorInterno1.jpg";
import ArchGrafik from "@/public/assets/images/grafik70.png";
import "./about.module.css";
import Tools from "@/src/components/Tools";
import Hook from "@/src/components/Hackchen";
import Arrow from "@/public/assets/images/arrow06.svg";
import { transform } from "next/dist/build/swc";
import Signature from "@/public/assets/images/unterschrift.svg";
//import styles from "./about.module.css";
import Projekt from "@/public/assets/images/Hotel-SaoPaulo.png";
import Button from "@/src/components/Button";
import SpringModal from "@/src/components/SpringModal";
import Portrait01 from "@/public/assets/images/Portrait01.jpeg";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function OurHistory({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("OurHistory");
  return (
    <>
      <h1 className="mb-4 p-1 mt-24 text-xs bg-slate-900 font-bold text-white text-center md:text-sm lg:py-5">
        über Fernanda
      </h1>

      <div className="relative w-full h-44 md:h-[44vh] lg:mx-auto lg:relative lg:h-[66vh] lg:w-full">
        <Image
          className="mx-auto"
          src={Projekt}
          fill
          sizes="100vw"
          alt="projekt sao  paulo"
        />
        <h1 className="relative text-center text-3xl lg:text-7xl text-white uppercase font-extrabold">
          projekt sao paulo-brasil
        </h1>
      </div>

      <h1 className="mt-5 px-3 py-2 rounded-xl text-center bg-slate-800 text-white text-2-xl">
        betrachten Sie Referenzprojekte von Fernanda Pereira
      </h1>
      <div className=" mx-auto">
        <SpringModal />
      </div>

      <h1 className="text-white text-[2.45rem] leading-5 sm:text-[1.36rem] mt-5 px-2 md:text-[1.92rem] lg:text-[2.33rem]font-bold uppercase text-left bg-neutral-500 md:text-7xl lg:leading-9 py-3 mb-7">
        Curriculum
      </h1>
      <h1 className="text-[1.145rem] leading-5 sm:text-[1.36rem] mt-5 px-2 md:text-[1.92rem] lg:text-[2.33rem text-zenseGrey font-bold uppercase text-center md:text-7xl lg:leading-9 py-3 mb-7">
        M. Fernanda Pereira
        <br /> PhD Architectura+Design interiore
      </h1>

      <div className="bg-zenseGrey/30  h-1/3 grid grid-cols-[5vw_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-stretch gap-0 w-[100vw]">
        <div className=" col-span-2 row-span-3 self-start">
          <Tools className="bg-yellow-6 self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12  mx-1 rounded-full p-1"></Tools>
           
        </div>
        <div className="  col-span-4 row-span-3 col-start-3">
          <p className="text-xs leading-3 mt-2 p-1 sm:text-sm lg:text-xl">
            M. Fernanda Pereira besuchte als PhD-Studentin die University of Sao
            Paulo. Hier studierte sie das Fachgebiet Innenarchitektur.
          </p>
        </div>
        <div className="bg-grey-500 col-span-4 row-start-1 row-span-6 col-start-7">
          <div className="relative w-full h-60 mt-5 md:mt-3 px-3">
            <Image
              src={ArchGrafik}
              alt="Illustration"
              sizes="100vw"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="bg-zenseGrey/20 col-span-2 row-span-3 row-start-4">
          <Tools className="bg-zenseSignal2 self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12 mx-1 rounded-full p-1" />
        </div>
        <div className="bg-zenseGrey/20  col-span-4 row-span-3 col-start-3 row-start-4">
          <p className="text-xs  lg:text-xl leading-3 mt-2 p-1 sm:text-sm">
            An der Universität in Montevideo- Uruquay legte sie den Grundstein
            ihres berulichen Werdegangs mit einem Studium der Architektur.
          </p>
        </div>

        <div className="bg-zenseGrey/10 col-span-2 row-span-3 row-start-7">
          <Tools className="bg-zenseSignal2 self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12  mx-1 rounded-full p-1" />
        </div>
        <div className="bg-zenseGrey/10 col-span-4 row-span-3 col-start-3 row-start-7">
          <p className="text-xs lg:text-xl leading-3 mt-2 p-1 sm:text-sm">
            Sie graduierte mit einem Masters Degree am rennomierten Institut für
            Konstruktions- wissenschaften &apo;Eduardo Torroja&apo; in Spanien.
          </p>
        </div>
        <div className="bg-grey-500 col-span-4 row-start-7 row-span-6 col-start-7 ">
          <h1
            className="text-white p-1 font-bold ml-5 mt-2 headingA uppercase text-[1.26rem] sm:text-3xl¨
xl"
          >
            Education
            <br />
            Projekte
          </h1>
        </div>
        <div className="bg-zenseGrey/ col-span-2 row-span-3 row-start-10">
          <Tools className="bg-zenseSignal2 self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12 mx-1 rounded-full p-1" />
        </div>
        <div className="bg-zenseGrey/10 col-span-4 row-span-3 col-start-3 row-start-10">
          <p className="text-xs  lg:text-xl leading-3 mt-2 p-1 sm:text-sm">
            Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches
            Manual of Concrete Rehabilitation: Reparier, Strengthening and
            Protection.
          </p>
        </div>
      </div>
    </>
  );
}
