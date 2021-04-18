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
    trackers: []
  });

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page:  url });
    ReactGA.pageview(url);
  };

  const addTracker = (trackerName) => {
    if (analytics.isInitialized) {
      ReactGA.addTrackers([
        {
          trackingId:  TrackingID,
          gaOptions: {
            name:  trackerName
          }
        }
      ]);

      setAnalytics((prev) => ({ ...prev, trackers: [...prev.trackers, trackerName] }));
    }
  };

  const removeTracker = (trackerName) => {
    if (analytics.isInitialized) {
      setAnalytics((prev) => ({
        ...prev,
        trackers: prev.trackers.filter((tracker) => tracker !== trackerName)
      }))
    }
  };

  const logEvent = ({category = "", action = "", label = ""}) => {
    if (analytics.isInitialized) {
      ReactGA.event({category, action, label})
    }
  };

  useEffect(() => {
    const { isInitialized } = analytics;

    if (!isInitialized && !isEnv("development")) {
      ReactGA.initialize(TrackingID, {
        debug: isEnv("development"),
        titleCase: false,
        // gaOptions: {
        //   cookieFlags: "SameSite=None; Secure",
        //   cookieDomain: "none"
        // },
      });

      setAnalytics(prev  => ({...prev, isInitialized: !isEnv("development") }));

      analytics.trackers.forEach(trackerName => addTracker(trackerName));
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
  });

  return (
    <TrackingContext.Provider value={{ addTracker, removeTracker, logEvent }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
