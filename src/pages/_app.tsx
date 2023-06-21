import DefaultLayout from '@/components/layouts/DefaultLayout'
import '@/styles/globals.css'
import { LayoutProps } from '@/components/layouts/types'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { wrapper } from '@/store/store';
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'

type LayoutType = (props: LayoutProps) => ReactElement | null

export type NextPageWithLayout = NextPage & {
  Layout?: LayoutType
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout || DefaultLayout;
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <title>Papagroup</title>
        <meta
          name="description"
          content="Select your preferred property, estimate monthly loan mortgage and submit loan mortgage application to property developer and bank partner in ease"
        />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig);
