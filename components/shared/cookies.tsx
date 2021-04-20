// Loadable
import loadable from '@loadable/component';
// React
import { FunctionComponent } from 'react';
// Components
const CookieConsent = loadable(() => import('react-cookie-consent'));
// Contexts
import { useLanguage } from '@/contexts/LanguageContext';
import { useTracking } from '@/contexts/TrackingContext';

const Cookies: FunctionComponent<any> = () => {
  const locale = useLanguage();
  const { updateAnalytics } = useTracking();

  const accept = () => {
    updateAnalytics("isDeclined", false);
  };

  const reject = () => {
    updateAnalytics("isDeclined", true);
  };

  return (
    <CookieConsent
      enableDeclineButton
      location="bottom"
      containerClasses="md:h-24 font-sans bg-primary text-primary items-center"
      buttonText={locale.dictionary.cookies.accept}
      declineButtonText={locale.dictionary.cookies.reject}
      cookieName="franx0-cookie"
      onAccept={() => accept()}
      onDecline={() => reject()}
      buttonWrapperClasses="m-auto"
      buttonClasses="bg-secondary hover:bg-outstanding text-primary rounded shadow-lg"
      declineButtonClasses="bg-red-600 hover:bg-red-500 rounded shadow-lg"
    >
      {locale.dictionary.cookies.main}
    </CookieConsent>
  )
}

export default Cookies
