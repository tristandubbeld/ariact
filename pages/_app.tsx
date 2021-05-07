import { AppProps } from 'next/app';
import { globalStyles } from '@/design-system/global';

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default App;
