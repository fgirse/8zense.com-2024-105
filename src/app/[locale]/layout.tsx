import clsx from 'clsx';

import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {
  getMessages,
  getTranslations,

} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/src/components/Navigation/Menu';
//import Footer from '@/src/components/Footer/footer';
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import {routing} from '@/src/i18n/routing';
import PrelineScript from "@/src/app/components/PrelineScript";
import {Londrina_Sketch, Architects_Daughter, Londrina_Outline } from "next/font/google";
import {unstable_setRequestLocale} from 'next-intl/server';

import Navbar from '@/src/components/ui/Navbar/Navbar';
import { Metadata } from 'next';
import Footer from '@/src/components/Footer/footer';
import { Toaster } from '@/src/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/src/utils/helpers';
import '@/src/app/[locale]/globals.css';
import { KeyObject } from 'crypto';

const londsketch= Londrina_Sketch({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-londsketch',
})

const archidaught= Architects_Daughter({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archidaught',
})



type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'Layout'});

  return {
    title: t("title"                ),
    icons: {icon : "/favicon.ico"},
  }}

  
 
  export default async function LocaleLayout({children, params: { locale }}: {
    children: ReactNode;
    params: { locale: string };
  }) {
    unstable_setRequestLocale(locale);
  
    // Enable static rendering
  
    // Providing all messages to the client
    // side is the easiest way to get started
  
  


  // Enable static rendering
  

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (

    <>
     <html lang="en" className={"${archidaught.variable} ${londsketsch.variable}"} suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true} className={clsx(londsketch.className, 'font-ad flex min-h-[100vh] w-[100%] flex-col bg-slate-700')}>
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            {children}
            <ScrollToTopButton />
            <Footer />
          </NextIntlClientProvider>
        
        <PrelineScript />
        </body>
      </html>
    </>
  )
}


























































    