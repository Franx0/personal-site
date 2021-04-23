// Loadable
import loadable from '@loadable/component';
// React
import React from 'react';
// Nextjs
import { useRouter } from 'next/router';
import Head from 'next/head';
// Components
const Loader = loadable(() => import('@/components/shared/loader'));
const Footer = loadable(() => import('@/components/Footer'));
const Cookies = loadable(() => import('@/components/shared/cookies'));
// Contexts
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
// Version
import { version } from '../package.json';

export const Layout = ({
  children,
  className = '',
  title = 'Franx0',
}) => {
  // const { theme } = useTheme();
  const locale = useLanguage();
  // const router = useRouter();
  // const meta = {
  //   title: locale.dictionary.meta[router.pathname.replace("/", "")].title || '',
  //   description: locale.dictionary.meta[router.pathname.replace("/", "")].description || '',
  //   imageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/media.jpg` || '',
  //   url: process.env.NEXT_PUBLIC_SITE_URL || '',
  //   keywords: locale.dictionary.meta[router.pathname.replace("/", "")].keywords || ''
  // };

  return (
    <div>
      <main className="flex font-sans">
        <div className={className}>
          {children(locale) || <Loader title={locale.dictionary.loader.title} text={locale.dictionary.loader.text} />}
        </div>
      </main>

      <section className="m-auto md:m-0 md:pr-8 py-4 text-right text-primary text-xs italic font-extralight">
        <div dangerouslySetInnerHTML={{__html: locale.dictionary.thanks.favicon}}></div>
        <div dangerouslySetInnerHTML={{__html: locale.dictionary.thanks.media}}></div>
      </section>

      <Cookies />

      <Footer {...{locale}} />
    </div>
  )
}

export default Layout
