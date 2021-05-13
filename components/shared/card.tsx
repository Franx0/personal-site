// React
import React, { FunctionComponent } from 'react';
// FrameMotion
import { AnimateSharedLayout, motion } from 'framer-motion';
// Types
import { CardProps } from '@/interfaces/index';
// Context
import { useLanguage } from '@/contexts/LanguageContext';
import { useTracking } from '@/contexts/TrackingContext';
// Constants
import { OPEN_CARD, CLOSE_CARD } from '@/root/constants';

const Card: FunctionComponent<any> = (props: CardProps) => {
  const { className, style, expandedStyle, title="", subtitle="", content, image, cardOpened, handleCardOpened } = props;
  const { logEvent } = useTracking();
  const locale = useLanguage();

  const handleClick = () => {
    logEvent({category: image.alt, action: OPEN_CARD, label: "text"});
    handleCardOpened();
  };

  return (
    <AnimateSharedLayout>
      {
        cardOpened ? (
          <motion.div className={`md:p-12 content-center expanded-card ${className}`} layoutId="expandable-card" style={expandedStyle}>
            <div className="absolute top-0 right-0 text-right m-1 p-1 cursor-pointer">
              <button className="hidden md:block text-current md:font-base text-xs font-light" title={locale.dictionary.actions.close} type="button" onClick={() => {logEvent({category: image.alt, action: CLOSE_CARD, label: "text"}); handleCardOpened("#")}}>{locale.dictionary.actions.close}</button>
              <button className="md:hidden text-current md:font-base text-xs font-light" title={locale.dictionary.actions.close} type="button" onClick={() => {logEvent({category: image.alt, action: CLOSE_CARD, label: "text"}); handleCardOpened("#")}}>[&#x2715;]</button>
            </div>
            <motion.div layoutId="expandable-card-h" className="lazy-text">
              { ((title || subtitle).length > 0) &&
                <>
                  <h2 className="expanded-card-h text-current mb-2" >{title}</h2>
                  <p className="text-xs md:text-base text-current mb-2">{subtitle}</p>
                  <hr className="min-w-full mb-8 border-current lazy-grow origin-left" />
                </>
              }
              <p className="object-contain text-sm md:text-base text-current text-justify">{content}</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.a title={image.alt} onClick={() => handleClick()} className={`shadow-lg cursor-pointer normal-card ${className}`} layoutId="expandable-card" style={style}>
            <img width={image.width} height={image.height} src={image.url} alt={image.alt} loading="lazy" className="mx-auto align-center rounded-full" />
          </motion.a>
        )
      }
    </AnimateSharedLayout>
  )
}

export default Card;
