"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/store/store'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
