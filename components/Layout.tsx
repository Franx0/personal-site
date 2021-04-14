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
// Contexts
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
// Version
import { version } from "../package.json";

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
      <Head>
        <title>{title}</title>
        <link rel="icon" href={`/favicon/favicon-${theme}.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/favicon-32x32-${theme}.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/favicon-16x16-${theme}.png`} />
        <meta charSet="utf-8" />
        <meta name="description" content={locale.dictionary.meta[router.pathname.replace("/", "")]} />
        <meta name="build version" content={version} />
      </Head>
      <main className="flex font-sans">
        <div className={className}>
          {children(locale) || <Loader title={locale.dictionary.loader.title} text={locale.dictionary.loader.text} />}
        </div>
      </main>
      <section className="m-auto md:m-0 pr-8 py-4 text-right text-primary italic font-extralight">
        <div dangerouslySetInnerHTML={{__html: locale.dictionary.thanks.favicon}}></div>
      </section>
      <Footer {...{locale}} />
    </>
  )
}

export default Layout
