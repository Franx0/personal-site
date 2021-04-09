// React
import React, { useState } from 'react';
// Nextjs
import { NextPage , NextPageContext} from 'next';
import dynamic from 'next/dynamic';
// Framer Motion
import { motion } from 'framer-motion';
// Components
const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false
})
import Card from '@/components/shared/card';
// Icons
import { Positive, Negative, HTML, Ruby, RubyOnRails, NodeJS, Javascript, Shield, ExpressJS, ReactAndNative, NextJS, NGINX, Docker } from '@/icons/index';

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

const MeIndex: NextPage<NextPageContext> = () => {
  const [skillsState, setSkillsState] = useState(true);
  const [jobsState, setJobsState] = useState(true);
  const [cardOpened, setCardOpened] = useState("#");

  return (
    <Layout title="Me" className="mx-6 my-6 md:mx-0">
      {(locale: any) =>
        <>
          {/* About me */}
          <div className="grid grid-flow-col lg:grid-cols-5 md:grid-cols-9 grid-cols-1 md:mt-24 mt-2">
            <div></div>
            <div className="lg:col-span-3 md:col-span-7 flex flex-col">
              <div className="grid md:grid-cols-3 grid-cols-1">
                <div className="md:block flex justify-center md:mx-8">
                  <img className="md:float-right content-center object-contain rounded-full" loading="lazy" alt="My photo" src={locale.dictionary.profile_image_url} />
                </div>
                <div className="overflow-hidden relative lazy-text bg-primary col-span-2 text-justify mt-2 md:mt-0 p-5 rounded shadow-lg" dangerouslySetInnerHTML={{__html: locale.dictionary.cv.description}}></div>
              </div>
            </div>
            <div></div>
          </div>
          {/* Skills */}
          <div className="sm:flex md:hidden mt-10 ml-2">
            <div className="flex justify-start align-middle mr-4 mb-10 text-primary" onClick={() => setSkillsState(!skillsState)}>
              <span className="inline-block mr-4">{locale.dictionary.cv.favorites}</span>
              <span className="inline-block">{skillsState ? <Negative /> : <Positive />}</span>
            </div>
          </div>
          <div className="min-h-max grid grid-flow-col md:grid-cols-6 grid-cols-12 md:mt-24">
            <div className="flex justify-center items-center"><p className="hidden md:flex min-width-0 whitespace-nowrap text-6xl text-primary transform -rotate-90">{locale.dictionary.cv.mySkills}</p></div>
            <div className="md:col-span-4 col-span-10 flex-col">
              <div className={`relative overflow-hidden transition-all duration-700 md:h-full md:mt-6 ${skillsState ? 'h-full' : 'h-0'} grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-x-10 md:gap-x-8 gap-3 px-5`}>
                {
                  icons.map((icon: JSX.Element, i: number) => {
                    return (
                      <motion.div key={`Skill-${i}`} animate={{ scale: [0,1,1.1,1] }} transition={{ delay: ((i/10)+0.1), duration: 0.6 }} className="flex flex-col h-40 align-center items-center text-center bg-cards md:m-2 m-1 md:p-4 py-2 justify-center rounded shadow-lg">
                        {icon}
                        <p key={icon.props.name} className="flex-2 text-gray-500">{icon.props.name}</p>
                      </motion.div>
                    )
                  })
                }
              </div>
            </div>
            <div></div>
          </div>
          {/* Jobs */}
          <div className="sm:flex md:hidden mt-10 ml-2">
            <div className="flex justify-start align-middle mr-4 mb-10 text-primary" onClick={() => setJobsState(!jobsState)}>
              <span className="inline-block mr-4">{locale.dictionary.cv.myJobs}</span>
              <span className="inline-block">{jobsState ? <Negative /> : <Positive />}</span>
            </div>
          </div>
          <div className="min-h-max grid grid-flow-col md:grid-cols-6 grid-cols-12 md:mt-24">
            <div className="flex justify-center items-center"><p className="hidden md:flex min-width-0 whitespace-nowrap text-6xl text-primary transform -rotate-90">{locale.dictionary.cv.myJobs}</p></div>
            <div className="md:col-span-4 col-span-10 h-full">
              <div className={`relative overflow-hidden transition-all duration-700 md:h-full md:mt-6 ${jobsState ? 'h-full' : 'h-0'} grid md:grid-cols-2 grid-cols-1 gap-4 px-5`}>
                {
                  Object.entries(locale.dictionary.cv.jobs).map(([name, hash]: [string, any], i: number) => {
                    return (
                      <motion.div key={`card-container-${i}`} animate={{ scale: [0,1,1.1,1] }} transition={{ delay: ((i/10)+0.1), duration: 0.6 }}>
                        <Card
                          key={`card${i}`}
                          cardOpened={cardOpened === i.toString()}
                          handleCardOpened={(val) => setCardOpened(val || i.toString())}
                          className={"md:p-8 px-5 py-3 rounded"}
                          style={{backgroundColor: hash.bgColor, borderColor: hash.textColor}}
                          expandedStyle={{backgroundColor: hash.bgColor, color: hash.textColor}}
                          title={name}
                          content={hash.description}
                          image={{alt: name, url: hash.imageUrl}}
                          expandedImage={{alt: name, url: hash.imageUrl}} />
                      </motion.div>
                    )
                  })
                }
              </div>
            </div>
            <div></div>
          </div>
        </>
      }
    </Layout>
  )
};

export default MeIndex
