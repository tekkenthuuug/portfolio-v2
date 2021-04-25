import GA4React from 'ga-4-react';
import Router, { AppProps } from 'next/dist/next-server/lib/router/router';
import { useEffect, useState } from 'react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [ga4react] = useState(new GA4React('G-BXM5LE3FPS'));

  useEffect(() => {
    (async () => {
      try {
        await ga4react.initialize();
      } catch {}
    })();

    const handleRouteChange = (url: string) => {
      if (ga4react) {
        ga4react.pageview(url);
      }
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [ga4react]);

  return <Component {...pageProps} />;
}

export default MyApp;
