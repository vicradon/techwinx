import React from "react"
import Layout from '../components/Layout'
import HomeTriangle from '../components/HomeTriangle'
import TopPosts from '../sections/TopPosts'
import 'bootstrap/dist/css/bootstrap.min.css';
import AI from "../sections/AI";
import MR from "../sections/MR";
import UAVs from "../sections/UAVs";
import Tefrica from "../sections/Tefrica";
import SEO from "../components/seo/SEO";

const Index = () => (
  <Layout>
    <SEO keywords={["Techwinx", "tca"]} title="Home" />
    <HomeTriangle />
    <TopPosts />
    <AI />
    <MR />
    <UAVs />
    <Tefrica />
  </Layout>
)
export default Index;