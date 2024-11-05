import {Londrina_Sketch, Architects_Daughter, Bowlby_One_SC} from "next/font/google";
import { Annie_Use_Your_Telescope } from 'next/font/google';

export const auyt = Annie_Use_Your_Telescope({
  subsets: ['latin'], style: 'normal',
  weight: "400",variable: '--annieuseyourtelescope'
});


  
  {/*export const annieuseyourtelescope= localFont({
    src: [
      {
        path: "@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.svg",
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.woff',
        weight: '400',
        style: 'normal',
      },
      {
        path: '@/public/fonts/annie-use-your-telescop/annieuseyourtelescope/annieuseyourtelescope-regular-webfont.ttf',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '@/public/fonts/annie-use-your-telescop/generator_config.txt',
        weight: '400',
        style: 'normal',
      },
      { 
        path: '@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.woff2',
        weight: '400',
        style: 'normal',
      },
    ],
    display: 'swap',
    variable: '--annieuseyourtelescope',
  })
*/}

  
  export const bowlbySC= Bowlby_One_SC({
    weight: ['400',],
    style: ['normal', ],
    subsets: ['latin'],
    display: 'swap',
    variable: '--bowlbySC',
  })

