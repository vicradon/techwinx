import React from "react"
import Layout from '../components/Layout'
import HomeTriangle from '../components/HomeTriangle'
import TopPosts from '../sections/TopPosts'
import 'bootstrap/dist/css/bootstrap.min.css';
import AI from "../sections/AI";
import MR from "../sections/MR";
import UAVs from "../sections/UAVs";

const Index = () => (
  <Layout>
    <HomeTriangle />
    <TopPosts />
    <AI />
    <MR />
    <UAVs />
  </Layout>
)
export default Index;