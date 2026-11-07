import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../util/analytics';

/**
 * Invia una page view a Google Analytics a ogni cambio di rotta.
 * Deve stare dentro <IonReactRouter>.
 */
const PageViewTracker: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

export default PageViewTracker;
