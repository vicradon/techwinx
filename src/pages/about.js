import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, CardImg, Card } from 'reactstrap';

const About = () => {
  return (
    <Layout>
      <style>
        {`
          .core-team-layout {
          }
        `}
      </style>
      <Container className="mt-4">
        <h1>About Techwinx</h1>
        <p>Techwinx is a platform which explores technology with focus on Africa. We aim to enhance Africa's technical know how and also bring more innovators into the tech ecosystem</p>

        <h2>Core team</h2>
        <div className="core-team-layout">
          <Row>
            <Col>
              <Card>
                <CardImg src = "" />
                <CardBody>
                  <CardTitle className="techwinx-card-title">{props.title} </CardTitle>
                  <CardText>{props.content} </CardText>
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