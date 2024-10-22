import clsx from 'clsx';
import {Gluten} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
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
import {unstable_setRequestLocale} from 'next-intl/server';

import Navbar from '@/src/components/ui/Navbar/Navbar';
import { Metadata } from 'next';
import Footer from '@/src/components/Footer/footer';
import { Toaster } from '@/src/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/src/utils/helpers';
import '@/src/app/[locale]/globals.css';


const inter = Gluten({subsets: ['latin']});

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
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
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
    <html className="" lang={locale}>
      <body suppressHydrationWarning={true} className={clsx(inter.className, 'flex min-h-[100vh] w-[100%] flex-col bg-slate-700')}>
        <NextIntlClientProvider messages={messages}>
      
          <Navigation />
        
      
          {children}
        <ScrollToTopButton/>
          <Footer />
        </NextIntlClientProvider>

       
      </body>
      <PrelineScript/>
    </html>
  );
}
