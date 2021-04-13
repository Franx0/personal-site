// Loadable
import loadable from '@loadable/component';
// React
import React, { useContext } from 'react';
// Nextjs
const Head = loadable(() => import('next/head'));
// Components
const Loader = loadable(() => import('@/components/shared/loader'));
const Footer = loadable(() => import('@/components/Footer'));
// Contexts
import { LanguageContext } from '@/contexts/LanguageContext';

export const Layout = ({
  children,
  className = '',
  title = 'Franx0',
}) => {
  const locale = useContext(LanguageContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex font-sans">
        <div className={className}>
          {children(locale) || <Loader title={locale.dictionary.loader.title} text={locale.dictionary.loader.text} />}
        </div>
      </main>
      <Footer {...{locale}} />
    </>
  )
}

export default Layout
