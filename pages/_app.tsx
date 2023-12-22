import {AppProps} from "next/app"
import '../styles/globals.css';
import { SSRProvider } from '@react-aria/ssr';

import passwordProtection from '../middleware/verifyPassword';



export default function App({ Component, pageProps }:AppProps) {
  return (
  
  <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
  )
}

// App.getInitialProps = async ({ Component, ctx }: any) => {
//   // Check password before rendering any page
//   if (ctx.req.url !== '/login' && !ctx.query?.password) {
//       passwordProtection(ctx.req, ctx.res, () => {});
//   }

//   let pageProps = {};
//   if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };

