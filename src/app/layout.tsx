

import {ReactNode} from 'react';
import '@/src/app/[locale]/globals.css';
import { Architects_Daughter, Bowlby_One_SC, Caveat, Annie_Use_Your_Telescope } from 'next/font/google';

const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  weight: ['400'],
    variable: '--font-architectsDaughter',
});

const bowlbySC = Bowlby_One_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bowlbySC',
});
const annieuseyourTelescope = Annie_Use_Your_Telescope({
  subsets: ['latin'],
  weight: [ '400', ],
  variable: '--font-annieuseyourTelescope',
});



type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
 return (

  <html className={`${annieuseyourTelescope.variable} ${bowlbySC.variable} ${architectsDaughter.variable}`}>
   <body  suppressHydrationWarning={true}   className="bg-gradient to b from bg-orange-600 to bg-red-100">
   {children}
   </body>
 
 </html>

 )


}