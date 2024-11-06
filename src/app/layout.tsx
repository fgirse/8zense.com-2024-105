

import {ReactNode} from 'react';
import '@/src/app/[locale]/globals.css';
import { auyt } from '@/src/app/utils/fonts';
import { Bowlby_One_SC, Annie_Use_Your_Telescope, Architects_Daughter} from 'next/font/google';
//import Faje from "@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.svg";

 const bowlbySC  = Bowlby_One_SC({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--bowlbySC',
})

const annieuseyourTelescope = Annie_Use_Your_Telescope({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--auyT',
})

const architectsDaughter = Architects_Daughter({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--archiDaught',
})

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
 return (

  <html>
   <body  suppressHydrationWarning={true}   className={'{auyT.variable} {bowlbySC.variable} {architectsDaughter.variable}'}>
   {children}
   </body>
 
 </html>

 )


}