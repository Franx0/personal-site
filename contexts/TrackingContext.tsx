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
    isDeclined: false,
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

  const updateAnalytics = (type, value) => {
    setAnalytics((prev) => ({
      ...prev, [type]: value
    }));
  };

  const initializeGA = (analyticState) => {
    const { isInitialized, isDeclined } = analyticState;

    if (!isInitialized && !isDeclined) {
      ReactGA.initialize(TrackingID, {
        debug: isEnv("development"),
        testMode: isEnv("development"),
        titleCase: false,
        gaOptions: {
          cookieFlags: "SameSite=None; Secure",
        }
      });

      setAnalytics(prev => ({...prev, isInitialized: !isEnv("development") }));
    } else {
      if(isDeclined) window[`ga-disable-${TrackingID}`] = true;
      else Router.events.on('routeChangeComplete', handleRouteChange);
    }
  }
  useEffect(() => {
    initializeGA(analytics);
  }, [analytics.isInitialized, analytics.isDeclined]);

  return (
    <TrackingContext.Provider value={{ addTracker, removeTracker, logEvent, updateAnalytics }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
