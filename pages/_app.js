import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // クライアントサイドでJavaScriptを読み込む
    const script = document.createElement('script');
    script.src = '/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // クリーンアップ - スクリプトが複数回追加されないようにする
      const oldScript = document.querySelector('script[src="/js/main.js"]');
      if (oldScript && oldScript.parentNode) {
        oldScript.parentNode.removeChild(oldScript);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#c50502" />
      </Head>
      <Layout title={pageProps.title}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;