// React
import { FunctionComponent, useState } from 'react';
// FrameMotion
import { AnimateSharedLayout, motion } from 'framer-motion';
// Types
import { CardProps } from '@/interfaces/index';

const Card: FunctionComponent<any> = (props: CardProps) => {
  const { className, style, expandedStyle, title, content, image, cardOpened, handleCardOpened } = props;

  return (
    <AnimateSharedLayout>
      {
        cardOpened ? (
          <motion.div className={`md:p-12 content-center expanded-card ${className}`} layoutId="expandable-card" style={expandedStyle}>
            <button className="absolute top-0 right-0 text-right p-3 text-current mr-1 cursor-pointer" title="Close" type="button" onClick={() => handleCardOpened("#")}>X</button>
            <div className="lazy-text">
              <motion.h2 className="expanded-card-h text-current mb-2" layoutId="expandable-card-h">{title}</motion.h2>
              <hr className="min-w-full mb-8 border-current lazy-grow origin-left" />
              <p className="object-contain text-sm md:text-base text-current text-justify">{content}</p>
            </div>
          </motion.div>
        ) : (
          <motion.a title={image.alt} onClick={() => handleCardOpened()} className={`shadow-lg cursor-pointer normal-card ${className}`} layoutId="expandable-card" style={style}>
            <img width={image.width} height={image.height} src={image.url} alt={image.alt} loading="lazy" className="mx-auto align-center rounded-full" />
          </motion.a>
        )
      }
    </AnimateSharedLayout>
  )
}

export default Card;
