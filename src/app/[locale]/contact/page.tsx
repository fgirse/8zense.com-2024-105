import React from "react";
import Image from "next/image";
import Logo from "@/src/components/icons/Logo";
// 👇 import local font
import localFont from 'next/font/local'
import styles from './Contact.module.css'



const page = () => {
  return (
    <>
      <section className="h-screen py-3 ">
        <div className="flex-1 w-[99vw] mt-16 py-1 px-3 rounded-xl flex flex-col mx-auto items-center justify-center lg:mt-24">
          <h1 className = {'{Bowlby_One_SC.className} uppercase text-center text-neutral-200 text-4xl lg:mt-[12vh] lg:text-[6rem]'}>
            {" "}
            contact
          </h1>

            <Image
              src="/assets/images/logoPet.svg"
              alt="Logo"
              width="150"
              height="150"
            />
          </div>
          <div className="relative mt-3 flex-1 ">
            <h1 className=" mb-2 text-4xl text-center text-neutral-200 lg:mt-5 lg:text-[12rem]">
              Claudia & Frank
            </h1>
            <h1 className=" text-2xl text-center text-neutral-300 lg:text-[10rem] lg:leading-9">
              Binzenstrasse 2
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200 lg:text-[10rem] lg:leading12 ">
              4058 Basel
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200 <lg:text-5xllg:text-[10rem] lg:leading12">
              Telefon: +49 15167621859
            </h1>
            <h1 className=" text-2xl text-center text-neutral-200 lg:text-[10rem] lg:leading12">
              claudiacarneiro@gmx.de
            </h1>
          </div>
      
      </section>
    </>
  );
};

export default page;


