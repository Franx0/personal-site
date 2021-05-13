// Loadable
import loadable from '@loadable/component';
// Nextjs
import { useRouter } from 'next/router';
// React
import { FunctionComponent } from 'react';
// Frame Motion
import { AnimatePresence, motion } from 'framer-motion';
// Components
const CookieConsent = loadable(() => import('react-cookie-consent'));
import { motionProps } from '@/utils/MotionProps';
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';
import { useTracking } from '@/contexts/TrackingContext';

const Cookies: FunctionComponent<any> = () => {
  const locale = useLanguage();
  const router = useRouter();
  const { updateAnalytics } = useTracking();

  const accept = () => {
    updateAnalytics("initialize", true);
  };

  const reject = () => {
    updateAnalytics("isDeclined", true);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={`${router.route}-cookies`} initial="initial" animate="enter" exit="exit" variants={motionProps.pageVariants.cookiesEasing}>
        <CookieConsent
          enableDeclineButton
          location="bottom"
          containerClasses="md:h-20 p-2 font-sans bg-primary text-primary items-center"
          buttonText={locale.dictionary.cookies.accept}
          declineButtonText={locale.dictionary.cookies.reject}
          onAccept={() => accept()}
          onDecline={() => reject()}
          buttonWrapperClasses="m-auto"
          buttonClasses="bg-secondary hover:bg-outstanding text-primary rounded shadow-lg"
          declineButtonClasses="bg-red-600 hover:bg-red-500 rounded shadow-lg"
        >
          {locale.dictionary.cookies.main}
          <p className="text-sm text-gray-400">{locale.dictionary.cookies.list}</p>
        </CookieConsent>
      </motion.div>
    </AnimatePresence>
  )
}

export default Cookies
