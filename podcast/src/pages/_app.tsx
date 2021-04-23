import React from 'react'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from '../styles/global'
import { ThemesProvider } from '../contexts/theme'

import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/Header'
import { Player } from '../components/Player'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="wrapper">
      <ThemesProvider>
        <GlobalStyle />
        <main>
          <Header />
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </main>
        <Player />
      </ThemesProvider>
    </div>
  )
}

export default MyApp
