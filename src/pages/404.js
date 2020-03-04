import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo/SEO";

const Index = () => (
  <Layout>
    <style>
      {`
        .take-down {
          margin-bottom:30rem;
        }
      `}
    </style>
    <SEO title="404:Not Found" />

    <div className="center">
      <h1 >Oops, page not found!</h1>
      <p className = "take-down"></p>
    </div>
  </Layout>
)
export default Index;