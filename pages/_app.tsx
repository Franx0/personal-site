// Loadable
import loadable from '@loadable/component';
// React
import { useState, useEffect } from 'react'
// Nextjs
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
// NextjsAuth
import { SessionProvider } from 'next-auth/react';
// Frame Motion
import { AnimatePresence } from 'framer-motion';
// Toast
import { ToastContainer } from 'react-nextjs-toast';
// Styles
import '@/styles/globals.css';
// Components
import { CustomHead as Head } from '@/components/Head';
const Header = loadable(() => import('@/components/shared/header'));
import { motionProps } from '@/utils/MotionProps';

// Contexts
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, LanguageContext, useLanguage } from '@/contexts/LanguageContext';
import { TrackingProvider } from '@/contexts/TrackingContext';
// Override functionality
import '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const locale = useLanguage();
  const router = useRouter();
  const [prevState, setPrevState] = useState({ history: [router.asPath] });

  useEffect(() => {
    setPrevState(prev => { return { history: [...prev.history, router.asPath] } });
  }, [router.pathname]);

  return (
    <SessionProvider session={pageProps.session}>
      <LanguageProvider>
        <ThemeProvider>
          <Head />
          <TrackingProvider >
            <Header {...motionProps} history={prevState.history} />
            <AnimatePresence exitBeforeEnter>
              <LanguageContext.Consumer>
                { locale => <Component {...pageProps} {...motionProps} {...locale} key={`${router.route}-component`} /> }
              </LanguageContext.Consumer>
            </AnimatePresence>
          </TrackingProvider>
          <ToastContainer align={"right"} position={"bottom"} />
        </ThemeProvider>
      </LanguageProvider>
    </SessionProvider>
  )
}

export default MyApp
