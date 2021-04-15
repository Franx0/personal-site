// React
import React, { useState, useEffect } from  'react';
// Nextjs
import Router from 'next/router';
// GA
import ReactGA from 'react-ga';
// Utils
import { isEnv } from '@/utils/index';

const TrackingID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const TrackingContext = React.createContext(null);

const TrackingProvider = ({ children }: any) => {
  const [analytics, setAnalytics] = useState({
    isInitialized: false,
    hasUser: false,
    trackers: ["PageViewTracker"],
    gaOptions: {
      cookieDomain: "none"
    }
  });

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page:  url }, analytics.trackers);
    ReactGA.pageview(url, analytics.trackers);
  };

  const logEvent = ({category = "", action = "", label = ""}) => {
    if (analytics.isInitialized) {
      ReactGA.event({category, action, label}, analytics.trackers)
    }
  };

  useEffect(() => {
    const { isInitialized } = analytics;
    console.log(!isEnv("development"))
    if (!isInitialized) {
      ReactGA.initialize(TrackingID, {
        debug: !isEnv("development"),
        titleCase: false,
        gaOptions: {
          cookieFlags: 'SameSite=None; Secure'
        },
      });

      setAnalytics(prev  => ({
        ...prev,
        isInitialized:  true,
      }));
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
  });

  return (
    <TrackingContext.Provider value={{ logEvent }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
