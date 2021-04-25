import GA4React from 'ga-4-react';
import { GA4ReactResolveInterface } from 'ga-4-react/dist/models/gtagModels';
import Router, { AppProps } from 'next/dist/next-server/lib/router/router';
import { useEffect, useState } from 'react';
import GAContext from '../contexts/GAContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [GA, setGA] = useState<null | GA4ReactResolveInterface>(null);

  useEffect(() => {
    (async () => {
      const GA = new GA4React('G-S42EGBW1R0');
      const GAResolved = await GA.initialize();
      setGA(GAResolved);
    })();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (GA) {
        GA.pageview(url);
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [GA]);

  return (
    <GAContext.Provider value={GA}>
      <Component {...pageProps} />
    </GAContext.Provider>
  );
}

export default MyApp;
