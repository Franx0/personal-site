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
    initialize: false,
    isInitialized: false,
    isDeclined: false,
    trackers: []
  });

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page:  url });
    ReactGA.pageview(url);
  };

  const addTracker = (trackerName: string) => {
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

  const removeTracker = (trackerName: string) => {
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

  const updateAnalytics = (type: string, value: any) => {
    setAnalytics((prev) => ({
      ...prev, [type]: value
    }));
  };

  const initializeGA = (analyticState: any) => {
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
    }

    if (isDeclined) {
      window[`ga-disable-${TrackingID}`] = true;
      ['_ga', '_gid', '_gat'].forEach ((cookieName: string) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
    } else {
      Router.events.on('routeChangeComplete', handleRouteChange);
    };
  }

  useEffect(() => {
    if(analytics.initialize) initializeGA(analytics);
  }, [analytics.initialize, analytics.isInitialized, analytics.isDeclined]);

  return (
    <TrackingContext.Provider value={{ addTracker, removeTracker, logEvent, updateAnalytics }}>
      {children}
    </TrackingContext.Provider>
  )
};

const useTracking = () => React.useContext(TrackingContext);

export { TrackingProvider, useTracking };
