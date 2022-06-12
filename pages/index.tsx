// Loadable
import loadable from '@loadable/component';
// React
import React, { useEffect }from 'react';
// Framer Motion
import { motion } from 'framer-motion';
import type { NextPage, NextPageContext } from 'next';
// Components
const LinkStyled = loadable(() => import('@/components/shared/link'));
const Image = loadable(() => import('@/components/shared/image'));
// Contexts
import { useTheme } from '@/contexts/ThemeContext';

const Home: NextPage<NextPageContext> = (props: any) => {
  const { setHideHeader }: any = useTheme();
  const imageStyle = { width: "100%", height: "inherit" };
  const gradientClasses = "text-shadow text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-white"

  useEffect(() => {
    setHideHeader(true);
  }, []);

  return (
    <motion.div className="h-screen relative bg-grey-400 opacity-90" initial="initial" animate="enter" exit="exit">
      <motion.div style={imageStyle} variants={props.pageVariants.easing}>
        <Image style={imageStyle} className="bg-cover bg-center" src="/media.jpg" alt="Home" />
      </motion.div>
      <motion.div variants={props.textVariants.easing}>
        <div className="absolute opacity-100 ml-2 mr-2 text-white md:whitespace-nowrap top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 justify-center">
          <p className={`text-shadow-dark flex text-3xl lg:text-5xl md:text-4xl mt-4 text-current text-center`}>{props.dictionary.landing.title}</p>
          <p className={`text-shadow-dark flex text-base md:text-2xl mt-8 justify-center text-current`}>{props.dictionary.landing.description}</p>
          <div className={`flex mt-12 justify-center`}>
            <LinkStyled className={`absolute md:relative -left-1/2 -bottom-3/4 md:bottom-0 md:left-0 mx-0 md:mx-2 shadow-md hover:bg-opacity-50 hover:bg-gray-500 shadow-inner p-2 rounded border-2 text-gray-100 border-gray-300 bg-transparent justify-center`} pathname={"/me"}>
              <span className="text-shadow-dark p-3">{props.dictionary.landing.profile}</span>
            </LinkStyled>
            <LinkStyled className={`absolute md:relative -right-1/4 -bottom-3/4 md:bottom-0 md:left-0 shadow-md hover:bg-opacity-50 hover:bg-gray-500 shadow-inner p-2 rounded border-2 text-gray-100 border-gray-300 bg-transparent justify-center`} pathname={"/posts"}>
              <span className="text-shadow-dark p-3">{props.dictionary.landing.blog}</span>
            </LinkStyled>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home
