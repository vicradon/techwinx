import React from "react"
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <style>
      {`
        .take-down {
          margin-bottom:30rem;
        }
      `}
    </style>
    <div className="center">
      <h1 >Oops, page not found!</h1>
      <p className = "take-down"></p>
    </div>
  </Layout>
)
export default Index;