import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const About = () => {
  return (
    <Layout>
      <style>
        {`
          
        `}
      </style>
      <Container className="pt-5">
        <p className = "pt-1"></p>
        <h1 className = "header-blue">About Techwinx</h1>
        <p>Techwinx is a platform which explores technology with focus on Africa. We aim to enhance Africa's technical know how and also bring more innovators into the tech ecosystem</p>

        <h2 className = "header-blue">Core team</h2>
        <div className="core-team-layout">
          <Row>
            <Col>
              <Card>
                <CardImg src = "" />
                <CardBody>
                  <CardTitle className="techwinx-card-title">Innocent Emmaunuel Chinedu</CardTitle>
                  <CardText>
                    <p>Chukwujama Osinachi Victor</p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export default About;