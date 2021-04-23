// Loadable
import loadable from '@loadable/component';
// React
import React from 'react';
// Components
const Loader = loadable(() => import('@/components/shared/loader'));
const Footer = loadable(() => import('@/components/Footer'));
const Cookies = loadable(() => import('@/components/shared/cookies'));
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';

export const Layout = ({
  children,
  className = '',
}) => {
  const locale = useLanguage();

  return (
    <>
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
