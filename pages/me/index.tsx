// Loadable
import loadable from '@loadable/component';
// React
import React, { useState, useEffect, useRef } from 'react';
// React Observer
import { useInView } from 'react-intersection-observer';
// Nextjs
import { NextPage , NextPageContext} from 'next';
// Framer Motion
import { motion, useAnimation } from 'framer-motion';
// Components
const Layout = loadable(() => import('@/components/Layout'))
const Card = loadable(() => import('@/components/shared/card'));
const Image = loadable(() => import('@/components/shared/image'));
// Icons
import { CV, HTML, Ruby, RubyOnRails, NodeJS, Javascript, ExpressJS, ReactAndNative, NextJS, NGINX, Docker } from '@/icons/index';
// Context
import { useTracking } from '@/contexts/TrackingContext';
// Constants
import { OPEN_CV } from '@/root/constants';

const variants: any = (index: number) => {
  return {
          visible: {
            opacity: 1, scale: [0,1,1.1,1],
            transition: { delay: ((index/5)+0.1), duration: 0.6 }
          },
          hidden: {
            opacity: 0, scale: [1,1.1,1,0],
            transition: { delay: 0, duration: 0.6 }
          }
        }
};

const icons = [
  <HTML name={'HTML & CSS'} key={`Icon-HTML`} width={"w-12"} height={"h-12"} className={"flex-1 m-auto mb-2"} />,
  <Javascript name={'Javascript'} key={`Icon-Javascript`} width={"w-12"} height={"h-12"} className={"flex-1 m-auto mb-2"} />,
  <Ruby name={'Ruby'} key={`Icon-Ruby`} width={"w-10"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <NodeJS name={'NodeJS'} key={`Icon-NodeJS`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <RubyOnRails name={'RubyOnRails'} key={`Icon-RubyOnRails`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <Docker name={'Docker'} key={`Icon-Docker`} width={"w-16"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <ExpressJS name={'ExpressJS'} key={`Icon-ExpressJS`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <ReactAndNative name={'React & React Native'} key={`Icon-React`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <NGINX name={'NGINX'} key={`Icon-NGINX`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />,
  <NextJS name={'NextJS'} key={`Icon-NextJS`} width={"w-20"} height={"h-10"} className={"flex-1 m-auto mb-2"} />
]

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.parentElement.offsetTop);

const MeIndex: NextPage<NextPageContext> = (props: any) => {
  const [cardOpened, setCardOpened] = useState("#");
  const { logEvent } = useTracking();
  const skillControls = useAnimation();
  const cardControls = useAnimation();

  const [inViewRef, inView] = useInView({triggerOnce: true, threshold: 0.30});
  const [inViewRef2, inView2] = useInView({triggerOnce: true, threshold: 0.25});

  const cardRef = useRef();
  const executeScroll = (ref) => scrollToRef(ref);

  useEffect(() => {
    if(inView && !inView2) cardControls.start("visible");
    if(inView2) skillControls.start("visible");
  }, [inView, inView2]);

  return (
    <Layout layoutId="me" className="mx-6 my-6 md:mx-0">
      <motion.div initial="initial" animate="enter" exit="exit" variants={props.pageVariants.easing}>
        {/* About me */}
        <div className="grid grid-flow-col lg:grid-cols-5 md:grid-cols-9 grid-cols-1 md:mt-24 mt-2">
          <div></div>
          <div className="lg:col-span-3 md:col-span-7 flex flex-col">
            <div className="grid md:grid-cols-3 grid-cols-1 relative">
              <div className="md:block flex justify-center md:mx-8">
                <Image width="200" height="200" style={{ width: '200px', height: '200px' }} className="object-cover md:float-right content-center rounded-full" alt="Fran Moya" src={props.dictionary.profile_image_url} />
              </div>
              <div className="relative bg-primary lazy-text col-span-2 text-justify mt-2 md:mt-0 p-5 rounded shadow-lg">
                <div className="z-20 text-default absolute top-5 right-5"><a target="_blank" onClick={() => logEvent({category: "CV", action: OPEN_CV, label: "file"})} href={props.dictionary.cv.download_url}><CV title={props.dictionary.cv.download}/></a></div>
                <div className="z-10 overflow-hidden" dangerouslySetInnerHTML={{__html: props.dictionary.cv.description}}></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* About me */}
        {/* Jobs */}
        <div className="sm:flex md:hidden mt-10 ml-2">
          <div className="flex justify-start align-middle mr-4 mb-10 text-primary">
            <span className="inline-block mr-4">{props.dictionary.cv.myJobs}</span>
          </div>
        </div>
        <div className="min-h-max grid grid-flow-col md:grid-cols-6 grid-cols-12 md:mt-24">
          <div className="flex justify-center items-center"><p className="hidden md:flex min-width-0 whitespace-nowrap text-6xl text-primary transform -rotate-90">{props.dictionary.cv.myJobs}</p></div>
          <div className="md:col-span-4 col-span-10 h-full">
            <div ref={inViewRef} className={`relative overflow-hidden transition-all duration-700 md:mt-6 h-full grid md:grid-cols-2 grid-cols-1 gap-4 px-5`}>
              {
                Object.entries(props.dictionary.cv.jobs).map(([name, hash]: [string, any], i: number) => {
                  return (
                    <motion.div key={`card-container-${i}`}
                                ref={cardRef}
                                animate={cardControls}
                                initial="hidden"
                                variants={variants(i)}
                                className="max-h-full">
                      <Card
                        key={`card${i}`}
                        title={name}
                        subtitle={hash.subtitle}
                        content={hash.description}
                        image={{width: 100, height: 100, alt: name, url: hash.imageUrl}}
                        className={"md:p-8 px-5 py-3 rounded"}
                        style={{backgroundColor: hash.bgColor, borderColor: hash.textColor}}
                        cardOpened={cardOpened === i.toString()}
                        handleCardOpened={(val: string) => { setCardOpened(val || i.toString()); executeScroll(cardRef) }}
                        expandedStyle={{backgroundColor: hash.bgColor, color: hash.textColor}}
                        expandedImage={{alt: name, url: hash.imageUrl}} />
                    </motion.div>
                  )
                })
              }
            </div>
          </div>
          <div></div>
        </div>
        {/* Jobs */}
        {/* Skills */}
        <div className="sm:flex md:hidden mt-10 ml-2">
          <div className="flex justify-start align-middle mr-4 mb-10 text-primary">
            <span className="inline-block mr-4">{props.dictionary.cv.favorites}</span>
          </div>
        </div>
        <div className="min-h-max grid grid-flow-col md:grid-cols-6 grid-cols-12 md:pt-28">
          <div className="flex justify-center items-center"><p className="hidden md:flex min-width-0 whitespace-nowrap text-6xl text-primary transform -rotate-90">{props.dictionary.cv.mySkills}</p></div>
          <div className="md:col-span-4 col-span-10 flex-col">
            <div ref={inViewRef2} className={`relative overflow-hidden transition-all duration-700 md:mt-6 h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-10 md:gap-x-8 gap-3 px-0 md:px-5`}>
              {
                icons.map((icon: JSX.Element, i: number) => {
                  return (
                    <motion.div key={`Skill-${i}`}
                                animate={skillControls}
                                initial="hidden"
                                variants={variants(i)}
                                className="flex flex-col h-40 align-center items-center text-center bg-cards md:m-2 m-1 md:p-4 py-2 justify-center rounded shadow-lg">
                      {icon}
                      <p key={icon.props.name} className="flex-2 text-sm md:text-base text-gray-500">{icon.props.name}</p>
                    </motion.div>
                  )
                })
              }
            </div>
          </div>
          <div></div>
        </div>
        {/* Skills */}
      </motion.div>
    </Layout>
  )
};

export default MeIndex
