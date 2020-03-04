import React from 'react';
import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import SEO from '../components/seo/SEO';

const Credits = () => {
  return (
    <Layout>
      <style>
        {`
          
        `}
      </style>
      <SEO keywords={["Techwinx", "tca"]} title="Credits page" />
      <Container className="pt-5">
        <p className="pt-1"></p>
        <h1 className="header-blue">Credits and Appreciation</h1>
        <p>Techwinx.com is built using the Gatsby PWA generator and hosted on Netlify. Special thanks goes to the folk @gatsby for building an intuitive product</p>

        <h3 className="header-blue">Developers</h3>
        <div>
          <p style={{
            marginBottom:
              "2px"
          }}>Chief: Chukwujama Osinachi Victor</p>
          <a href="https://github.com/vicradon">Github profile</a>
        </div>

      </Container>
    </Layout>
  )
}

export default Credits;