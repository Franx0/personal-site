// React
import React, { useContext} from 'react';
// Nextjs
import type { AppProps } from 'next/app';
import Head from 'next/head';
// NextjsAuth
import { Provider } from 'next-auth/client';
// Frame Motion
import { AnimateSharedLayout } from "framer-motion";
// Toast
import { ToastContainer } from 'react-nextjs-toast';
// Styles
import "@/styles/globals.css";
// Components
import Header from "@/components/shared/header";
// Contexts
import { ThemeProvider } from "@/contexts/ThemeContext";

import '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider>
        <Header />
        <AnimateSharedLayout>
          <Component {...pageProps} />
          <ToastContainer align={"right"} position={"bottom"} />
        </AnimateSharedLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
