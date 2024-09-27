import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/src/components/Navigation/Menu';
import Footer from '@/src/components/Footer/footer';
import ScrollToTopButton from "@/src/components/ScrollToTopButton";
import {routing} from '@/src/i18n/routing';
import PrelineScript from "@/src/app/components/PrelineScript";

const inter = Inter({subsets: ['latin']});

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
    icons: {icon : "/assets/images/LogoEZ990.svg"},
  }}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="" lang={locale}>
      <body suppressHydrationWarning={true} className={clsx(inter.className, 'flex min-h-[100vh] w-[100%] flex-col')}>
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







