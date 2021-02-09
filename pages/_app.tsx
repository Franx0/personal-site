import type { AppProps } from 'next/app';
// NextjsAuth
import { Provider } from 'next-auth/client';
// Frame Motion
import { AnimateSharedLayout } from "framer-motion";
// Toast
import { ToastContainer } from 'react-nextjs-toast';

import '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
        <ToastContainer align={"right"} position={"bottom"} />
      </AnimateSharedLayout>
    </Provider>
  )
}

export default MyApp
