

import {ReactNode} from 'react';
import '@/src/app/[locale]/globals.css';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
 return (

  <html>
  <body className="h-[100vh]">
   {children}
   </body>
 
 </html>

 )


}