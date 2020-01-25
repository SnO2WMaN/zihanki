import React from 'react'
import App from 'next/app'

import '../styles/global.css'
import '../locales/i18n'

import SideMenuManager from '../state/SideMenuManager'

import GlobalNav from '../components/GlobalNav'
import CloseFader from '../components/SideMenu/CloseFader'
import SideMenu from '../components/SideMenu'

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
