

import {ReactNode} from 'react';
import '@/src/app/[locale]/globals.css';
import { bowlbySC, annieuseyourTelescope, architectsDaughter} from '@/src/app/utils/fonts';
//import Faje from "@/public/fonts/annie-use-your-telescop/annieuseyourtelescope-regular-webfont.svg";



type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
 return (

  <html className={"${annieuseyourTelescope.className}"}>
   <body  suppressHydrationWarning={true}   className={'{allieuseyourTelescope.variable} {bowlbySC.variable} {architectsDaughter.variable}'}>
   {children}
   </body>
 
 </html>

 )


}