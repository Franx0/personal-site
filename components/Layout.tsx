// Loadable
import loadable from '@loadable/component';
// React
import React, { useContext } from 'react';
// Nextjs
import { useRouter } from 'next/router';
const Head = loadable(() => import('next/head'));
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
  const { theme } = useTheme();
  const locale = useLanguage();
  const router = useRouter();

  return (
    <>
      <Head prefix="og: http://ogp.me/ns#">
        <title>{title}</title>

        <link rel="icon" href={`/favicon/favicon-${theme}.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/favicon-32x32-${theme}.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/favicon-16x16-${theme}.png`} />

        <meta name="author" content="Francisco Moya"></meta>
        <meta name="description" content={locale.dictionary.meta[router.pathname.replace("/", "")].description} />
        <meta name="build version" content={version} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/media.jpg`} />
        <meta property="og:title" content={locale.dictionary.meta[router.pathname.replace("/", "")].title} />
        <meta property="og:description" content={locale.dictionary.meta[router.pathname.replace("/", "")].description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Franxo06" />
        <meta name="twitter:creator" content="@Franxo06" />
      </Head>
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
    </>
  )
}

export default Layout
