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
import {Londrina_Shadow, Architects_Daughter } from "next/font/google";
import {unstable_setRequestLocale} from 'next-intl/server';

import Navbar from '@/src/components/ui/Navbar/Navbar';
import { Metadata } from 'next';
import Footer from '@/src/components/Footer/footer';
import { Toaster } from '@/src/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense } from 'react';
import { getURL } from '@/src/utils/helpers';
import '@/src/app/[locale]/globals.css';

import { KeyObject } from 'crypto';

const londshad= Londrina_Shadow({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-londshad',
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
    <html className="" lang={locale}>
      <body suppressHydrationWarning={true} className={clsx(londria.className, 'flex min-h-[100vh] w-[100%] flex-col bg-slate-700')}>
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



import DeployButton from "@/src/components/deploy-button";
import { EnvVarWarning } from "@/src/components/env-var-warning";
import HeaderAuth from "@/src/components/header-auth";
import { ThemeSwitcher } from "@/src/components/theme-switcher";
import { hasEnvVars } from "@/src/utils/supabase/check-env-vars";

import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";



const londshad = Londrina_Shadow({
  subsets: ['latin'],
  display: 'swap',
  weight: '400', //   
  //👇 Add variable to our object
  variable: '--font-londshad',
})

const archidaughr = Architects_Daughter({
  subsets: ['latin'],
  display: 'swap',
  weight: '400', //          
  //👇 Add variable to our object
  variable: '--font-archidaught',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="${archidaught.variable} ${londshad.variable}" suppressHydrationWarning>
      <body className="bg-background  " suppressHydrationWarning={true} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Next.js Supabase Starter</Link>
                    <div className="flex items-center gap-2">
                      <DeployButton />
                    </div>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}