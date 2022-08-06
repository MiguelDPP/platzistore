import AppContext from '@context/AppContext';
import Head from 'next/head';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>React Shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
