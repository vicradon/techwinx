import React from "react"
import Layout from '../components/Layout'
import HomeTriangle from '../components/HomeTriangle'
import TopPosts from '../components/TopPosts'
import '../css/style.scss'
import '../css/tachyons.min.css'
// import Pictures from "../components/Pictures"

export default () => (
  <Layout>
    <HomeTriangle />
    <TopPosts />
    <div>
      {/* <Pictures /> */}

    </div>
  </Layout>
)