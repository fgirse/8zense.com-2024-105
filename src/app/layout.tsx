

import {ReactNode} from 'react';
import '@/src/app/[locale]/globals.css';
import { auyt } from '@/src/app/utils/fonts';
import { Bowlby_One_SC, Annie_Use_Your_Telescope} from 'next/font/google';
//import Faje from "@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.svg";

export const bowlbySC= Bowlby_One_SC({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--bowlbySC',
})

export const annieuseyourtelescope= Annie_Use_Your_Telescope({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--annieuseyourtelescope',
})



type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
 return (

  <html className={'${auyt.className}'}>
   <body  suppressHydrationWarning={true}   className={'{auyt.variable} {bowlbySC.varisble}'}>
   {children}
   </body>
 
 </html>

 )


}