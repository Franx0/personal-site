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
import { AnimateSharedLayout } from 'framer-motion';
// Toast
import { ToastContainer } from 'react-nextjs-toast';
// Styles
import '@/styles/globals.css';
// Components
import { CustomHead as Head } from '@/components/Head';
const Header = loadable(() => import('@/components/shared/header'));
// Contexts
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
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
        <ThemeProvider>
          <Head />
          <Header history={prevState.history} />
          <AnimateSharedLayout>
            <TrackingProvider>
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
