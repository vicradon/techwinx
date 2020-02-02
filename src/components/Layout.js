import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <style>
        {
          `
            .center {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `
        }
      </style>
      <Navbar />

      {children}

      <Footer />
    </div>
  )
}