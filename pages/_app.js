import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Navbar } from './components/navbar'
import App from 'next/app'
import { useEffect } from 'react'
const StorageUtils = require('./utils/storageUtils')

class MyApp extends App {
  render() {

      const { Component, pageProps } = this.props

      let isSignedIn;

      if (typeof window !== 'undefined') {
        isSignedIn = window.location.pathname
      }

      if(isSignedIn && isSignedIn === "/"){
        return <Component {...pageProps} />
      }
      else{
        return (
          <>
          <Navbar/>
          <Component {...pageProps}/>
          </>
        )
      }
  }
}

export default MyApp
