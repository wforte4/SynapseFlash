import React from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper'
import store from "../store/store";
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps, router}) {
  const [loading, setLoading] = useState(false)
  const [themeColor, setTheme] = useState('#ffffff')
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  Router.events.on('routeChangeError', ()=> setLoading(false))

  return (
    <Provider store={store}>
      <Layout themeColor={themeColor} setTheme={setTheme}>
        <Component themeColor={themeColor} {...pageProps}></Component>
      </Layout>
    </Provider>
  )
}

const makestore = ()=> store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)