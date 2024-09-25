// Loadable
import loadable from '@loadable/component';
// React
import React, { useEffect }from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import type { NextPage, NextPageContext } from 'next';
// Context
import { useTheme } from '@/contexts/ThemeContext';
// Components
const LinkStyled = loadable(() => import('@/components/shared/link'));
const Image = loadable(() => import('@/components/shared/image'));

const Home: NextPage<NextPageContext> = (props: any) => {
  const { setHeader } = useTheme();

  useEffect(() => {
    setHeader(false);
  }, []);

  return (
    <motion.div className="relative bg-grey-400 opacity-90" style={{ height: "100vh" }} initial="initial" animate="enter" exit="exit">
      <div className={"background-root-image"}></div>
      <motion.div variants={props.textVariants.easing}>
        <div className="absolute opacity-100 ml-2 mr-2 text-white md:whitespace-nowrap top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 justify-center">
          <p className={`text-shadow-dark flex text-3xl md:text-5xl mt-4 text-current`}>{props.dictionary.landing.title}</p>
          <p className={`text-shadow-dark flex text-base md:text-2xl mt-8 justify-center text-current`}>{props.dictionary.landing.description}</p>
          <p className={`flex mt-12 justify-center`}>
            <LinkStyled className={`shadow-md hover:bg-opacity-50 hover:bg-gray-500 shadow-inner p-2 rounded border-2 text-gray-100 border-gray-300 bg-transparent justify-center`} pathname={"/me"}>
              <span className="text-shadow-dark p-3">{props.dictionary.landing.profile}</span>
            </LinkStyled>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
