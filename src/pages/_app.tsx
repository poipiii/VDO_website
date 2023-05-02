import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/router";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
     require("bootstrap/dist/js/bootstrap") ;
    }, []);

  return (
    
  
    <>
          <Component {...pageProps} />

<Analytics/>
    </>
  

  )
}
