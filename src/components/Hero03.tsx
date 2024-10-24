import React from "react"
import Image from "next/image";
import Puppies  from'@/public/assets/images/peddiesGras.png';
import { useTranslations } from "next-intl"; 
import Footsteps from '@/public/assets/images/babyfoot.png';
const Hero03= () => {
const t= useTranslations("Hero_03")
    return (

<>
<div className="px-4 lg:px-6 py-10">
    <div className="flex-col items-center">
        <Image src={Puppies} alt='Puppies' width='1300'/>
        </div>
  <div data-hs-carousel='{
      "loadingclassNames": "opacity-0"
    }' className="relative">
    <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        {/* Item */}
        <div className="hs-carousel-slide">
          <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/images/Kica08.png')] bg-cover bg-center bg-no-repeat lg:bg-contain lg:text-slate-700">
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className="block text-white text-6xl uppercase md:text-[7.33rem]">{t("Title")}</span>
              <span className="block text-white text-xl md:text-3xl">{t("postTitle")}</span>
              <div className="mt-5">
          l
              </div>
            </div>
          </div>
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="hs-carousel-slide">
          <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/images/Kica_Welpe-Photoroom.jpg')] bg-cover bg-center bg-no-repeat lg:bg-contain lg:text-slate-700">
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className="block uppercase text-black text-[4.0rem] leading-9">Bom dia</span>
              <span className="block text-white text-xl md:text-3xl">Kica als Welpe</span>
              <div className="mt-5">

              </div>
            </div>
          </div>
        </div>
        {/* End Item */}

        {/* Item */}
        <div className="hs-carousel-slide">
          <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/assets/images/Portrait_Kica-01-Photoroom.jpg')] bg-cover bg-center bg-no-repeat lg:bg-contain lg:text-slate-700">
            <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
              <span className="block text-[5rem] uppercase text-white">Kica</span>
              <span className="block text-white text-xl md:text-3xl">4 jährige Hündin aus Monte Cordova</span>
              <div className="mt-5">
            
              </div>
            </div>
          </div>
        </div>
        {/* End Item */}
      </div>
    </div>

    {/* Arrows */}
    <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
      <span className="text-2xl" aria-hidden="true">
        <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
        </svg>
      </span>
      <span className="sr-only">Previous</span>
    </button>

    <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
      <span className="sr-only">Next</span>
      <span className="text-2xl" aria-hidden="true">
        <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </span>
    </button>
    {/* End Arrows */}
  </div>
 

  <h1 className="mt-5 text-slate-100 text-5xl"> {t("text00_Hero3")}</h1>
  <p className="text-base md:text-lg text-slate-200 my-4 md:my-6 ">{t("text01_Hero3")}</p>
        <div className="relative top-16 w-56 h-56 ">
      
      <Image src={Footsteps} alt="babyfoot" width={400} height={300} />
      
      </div>
</div>

</>

    )

}

export default Hero03;

