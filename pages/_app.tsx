import {AppProps} from "next/app"
import '../styles/globals.css';
import { SSRProvider } from '@react-aria/ssr';

export default function App({ Component, pageProps }:AppProps) {
  return (
  
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
  )
}

