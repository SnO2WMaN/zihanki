import React from 'react'

import '../styles/global.css'
import '../locales/i18n'
import GlobalNav from '../components/GlobalNav'
import SideMenu from '../components/SideMenu'
import CloseFader from '../components/SideMenu/CloseFader'
import SideMenuManager from '../state/SideMenuManager'
import App from 'next/app'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <SideMenuManager.Provider>
          <GlobalNav />
          <CloseFader />
          <SideMenu />
        </SideMenuManager.Provider>
        <Component {...pageProps} />
      </>
    )
  }
}
