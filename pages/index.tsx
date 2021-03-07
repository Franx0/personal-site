// React
import { useContext } from 'react';
// Nextjs
import Head from 'next/head';
import type { NextPage } from 'next'
// Context
import HeaderContext from "@/contexts/HeaderContext";

const Home = ({}: NextPage) => {
  const { title: { title } } = useContext(HeaderContext);
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
