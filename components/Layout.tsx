// Nextjs
import Head from 'next/head'
// Components
import Loader from '@/components/shared/loader';
import Footer from '@/components/Footer';
// Icons
import { Twitter, Linkedin, Gmail } from '@/icons/index';

export const Layout = ({
  children,
  className = '',
  title = 'Franx0',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={className}>
          {children || <Loader />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
