// React
import React, { useContext } from 'react';
// Nextjs
import Head from 'next/head'
// Components
import Loader from '@/components/shared/loader';
import Footer from '@/components/Footer';
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
