// import React from 'react';
// import App from 'next/app';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import Layout from '../components/Layout';
import 'react-awesome-slider/dist/styles.css';

import { Provider } from 'react-redux'
import { useStore } from '../store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
       <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

// class MyApp extends App {
//   render () {
//     const { Component, pageProps } = this.props
//     return (

//         <Layout>
//           <Component {...pageProps} />
//         </Layout>

//     )
//   }
// }



// export default withRedux(makeStore)(MyApp)
