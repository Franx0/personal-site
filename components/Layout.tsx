// Loadable
import loadable from '@loadable/component';
// React
import React, { useEffect } from 'react';
// Components
const Loader = loadable(() => import('@/components/shared/loader'));
const Footer = loadable(() => import('@/components/Footer'));
const Cookies = loadable(() => import('@/components/shared/cookies'));
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export const Layout = ({
  children,
  className = '',
  layoutId = 'layout',
  loader = true,
  header = false
}) => {
  const { dictionary } = useLanguage();
  const { setHideHeader } = useTheme();

  useEffect(() => {
    setHideHeader(header);
  }, [header]);

  return (
    <>
      <main className="flex font-sans">
        <div
          className={className}
          key={layoutId}>
          {children || (loader === true && <Loader title={dictionary.loader.title} text={dictionary.loader.text} />)}
        </div>
      </main>

      <section className="m-auto md:m-0 md:pr-8 py-4 text-right text-primary text-xs italic font-extralight">
        <div dangerouslySetInnerHTML={{__html: dictionary.thanks.favicon}} />
        <div dangerouslySetInnerHTML={{__html: dictionary.thanks.media}} />
      </section>

      <Cookies className="cookies-container" />

      <Footer {...{dictionary}} />
    </>
  )
}

export default Layout
