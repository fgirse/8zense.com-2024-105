import React from "react";
import Image from "next/image";
import Logo from "@/src/components/icons/Logo";

const page = () => {
  return (
    <>
      <section className="h-screen py-3 ">
        <div className="w-[90vw] mt-16 py-1 px-3 rounded-xl flex flex-col mx-auto items-center justify-center">
          <h1 className="uppercase text-center text-neutral-700 text-4xl lg:mt-[12vh] lg:text-[6rem]">
            {" "}
            contact
          </h1>

          <div className="mt-24 w-36 h-36 p-5">
            <Image
              src="/assets/images/logoPet.svg"
              alt="Logo"
              width="300"
              height="300"
            />
          </div>
          <div className="relative mt-3 flex-1 ">
            <h1 className=" mb-2 text-4xl text-center text-neutral-600 lg:mt-5 lg:text-8xl">
              Claudia & Frank
            </h1>
            <h1 className=" text-2xl text-center text-neutral-700 lg:text-5xl">
              Binzenstrasse 2
            </h1>
            <h1 className=" text-2xl text-center text-neutral-700 lg:text-5xl ">
              4058 Basel
            </h1>
            <h1 className=" text-2xl text-center text-neutral-700 lg:text-5xl">
              Telefon: +49 15167621859
            </h1>
            <h1 className=" text-2xl text-center text-neutral-700 lg:text-5xl">
              claudiacarneiro@gmx.de
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
