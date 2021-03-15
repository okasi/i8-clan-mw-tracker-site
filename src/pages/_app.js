import { ChakraProvider } from '@chakra-ui/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>i8</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <PayPalScriptProvider
        options={{
          'client-id':
            'Adsy1vxGY3ZTSEfq5heKSrvqykIDX1BruqkRXDh4tceARQ2_-PMmlyCXokjeZrGFLCuOCQGQvUCOEQPd',
          vault: true
        }}
      >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      </PayPalScriptProvider>
    </>
  )
}

export default MyApp
