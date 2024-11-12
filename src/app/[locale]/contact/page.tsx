import React from "react";
import Image from "next/image";
import Logo from "@/src/components/icons/Logo";
// 👇 import local font
import localFont from 'next/font/local'
import styles from './Contact.module.css'
import {annieuseyourTelescope} from '@/src/app/utils/fonts';


const page = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-stone-600 to bg-stone-400 h-screen py-3 ">
        <div className="flex-1 w-[99vw] mt-16 py-1 px-3 rounded-xl flex flex-col mx-auto items-center justify-center lg:mt-24">
          <h1 className = "headingE bowlbySC uppercase text-center text-stone-100 text-6xl lg:mt-[8vh] lg:text-[4em]">
            
            contact
          </h1>

            <Image
              src="/assets/images/logoPet.svg"
              alt="Logo"
              width="150"
              height="150"
            />
          </div>
          <div className="relative mt-3 flex-1 headingB2 font-primary">
            <h1 className=" mb-2 text-4xl  text-center text-whitee lg:mt-6 lg:text-[5rem]">
              Claudia & Frank
            </h1>
            <h1 className=" text-2xl text-center font-primary text-neutral-300 lg:mt-6  lg:text-[4em] lg:leading-9">
              Binzenstrasse 2
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200  lg:mt-6 lg:text-[4em] lg:leading-9">
              4058 Basel
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200 lg:mt-6  lg:text-[4em] lg:leading[6rem] lg:leading9">
              Telefon: +49 15167621859
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200 lg:mt-6 lg:text-[4em] lg:leading9">
              claudiacarneiro@gmx.de
            </h1>
          </div>
      
      </section>
    </>
  );
};

export default page;


