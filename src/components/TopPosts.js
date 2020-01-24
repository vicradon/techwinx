import React from 'react'
import Card from './Card'

export default function TopPosts() {
  return (
    <section ClassName="section">
      <style>
        {`
          
        `}
      </style>
      <div className="pv4">
        <p className="f3 center">🏆 Top Posts</p>
        <div className="pt4 container">
          <div className="columns carousel">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  )
}