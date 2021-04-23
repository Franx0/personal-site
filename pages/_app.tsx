// Loadable
import loadable from '@loadable/component';
// React
import { useState, useEffect } from 'react'
// Nextjs
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
// NextjsAuth
import { Provider } from 'next-auth/client';
// Frame Motion
import { AnimateSharedLayout } from 'framer-motion';
// Toast
import { ToastContainer } from 'react-nextjs-toast';
// Styles
import '@/styles/globals.css';
// Components
const Header = loadable(() => import('@/components/shared/header'));
// Contexts
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TrackingProvider } from '@/contexts/TrackingContext';
// Override functionality
import '../utils';

import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
// Version
import { version } from '../package.json';
const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [prevState, setPrevState] = useState({ history: [router.asPath] });
  const locale = useLanguage();
  const { theme } = useTheme();
  const meta = {
    title: locale.dictionary.meta[router.pathname.replace("/", "")].title || '',
    description: locale.dictionary.meta[router.pathname.replace("/", "")].description || '',
    imageUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/media.jpg` || '',
    url: process.env.NEXT_PUBLIC_SITE_URL || '',
    keywords: locale.dictionary.meta[router.pathname.replace("/", "")].keywords || ''
  };

  useEffect(() => {
    setPrevState(prev => { return { history: [...prev.history, router.asPath] } });
  }, [router.pathname]);

  return (
    <Provider session={pageProps.session}>
      <LanguageProvider>
        <ThemeProvider>
          <Header history={prevState.history} />
          <AnimateSharedLayout>
            <TrackingProvider>
              <Head>
                <title>{'Franx0'}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="author" content="Francisco Moya" />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="build version" content={version} />
                <meta name="robots" content="index,follow" />

                {/* Google */}
                <meta itemProp="name" content={meta.title} key="title" />
                <meta itemProp="description" content={meta.description} key="desc" />
                <meta itemProp="image" content={meta.imageUrl} key="image" />

                {/* Open Graph */}
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content={meta.url} key="ogurl" />
                <meta property="og:image" content={meta.imageUrl} key="ogimage" />
                <meta property="og:title" content={meta.title} key="ogtitle" />
                <meta property="og:description" content={meta.description} key="ogdesc" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                <meta property="twitter:url" content={meta.url} />
                <meta name="twitter:creator" content="@Franxo06" key="twcreator" />
                <meta name="twitter:image" content={meta.imageUrl} key="twimage" />
                <meta name="twitter:title" content={meta.title} key="twtitle" />
                <meta name="twitter:description" content={meta.description} key="twdesc" />

                <link rel="icon" href={`/favicon/favicon-${theme}.ico`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/favicon-32x32-${theme}.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/favicon-16x16-${theme}.png`} />
              </Head>
              <Component {...pageProps} />
            </TrackingProvider>
            <ToastContainer align={"right"} position={"bottom"} />
          </AnimateSharedLayout>
        </ThemeProvider>
      </LanguageProvider>
    </Provider>
  )
}

export default MyApp
