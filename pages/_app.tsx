// Loadable
import loadable from '@loadable/component';
// React
import { useState, useEffect } from 'react'
// Nextjs
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
// NextjsAuth
import { Provider } from 'next-auth/client';
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
import { MetadataProvider, MetadataContext } from '@/contexts/MetadataContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, LanguageContext } from '@/contexts/LanguageContext';
import { TrackingProvider } from '@/contexts/TrackingContext';
// Override functionality
import '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [prevState, setPrevState] = useState({ history: [router.asPath] });

  useEffect(() => {
    setPrevState(prev => { return { history: [...prev.history, router.asPath] } });
  }, [router.pathname]);

  return (
    <Provider session={pageProps.session}>
      <LanguageProvider>
        <MetadataProvider>
          <LanguageContext.Consumer>
            { (locale: any) =>
              <MetadataContext.Consumer>
                { ({metadata}) =>
                  <ThemeProvider>
                    <Head metadata={metadata} locale={locale} />
                    <TrackingProvider >
                      <Header {...motionProps} history={prevState.history} />
                      <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} {...motionProps} {...locale} key={`${router.route}-component`} />
                      </AnimatePresence>
                    </TrackingProvider>
                    <ToastContainer align={"right"} position={"bottom"} />
                  </ThemeProvider>
                }
              </MetadataContext.Consumer>
            }
          </LanguageContext.Consumer>
        </MetadataProvider>
      </LanguageProvider>
    </Provider>
  )
}

export default MyApp
