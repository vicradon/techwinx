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
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
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