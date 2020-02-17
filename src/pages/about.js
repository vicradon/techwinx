import React from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col, CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import chineduImage from "../images/chinedu.jpg"
import ralphImage from "../images/ralph.jpg"

const About = () => {
  return (
    <Layout>
      <style>
        {`
            .core-team-layout {
            }
            .team-card {
              width: 300px;
              // margin: 0 auto;
            }
            .team-image {
            }
        `}
      </style>
      <Container className="pt-5">
        <p className="pt-1"></p>
        <h1 className="header-blue">About Techwinx</h1>
        <p>Techwinx is a platform which explores technology with focus on Africa. We aim to enhance Africa's technical know how and also bring more innovators into the tech ecosystem</p>
        
        <h2 className="header-blue">Mission Statement</h2>
        <p>To expose Africa to tech</p>

        <h2 className="header-blue">Vision Statement</h2>
        <p>To have impacted 200 secondary schools across west africa before 2025</p>
        <h2 className="header-blue">Core team</h2>
        <div className="core-team-layout">
          <Row>
            <Col>
              <Card className = "team-card">
                <CardImg className = "team-image" src={chineduImage} />
                <CardBody>
                  <CardTitle className="techwinx-card-title">Innocent Emmaunuel Chinedu</CardTitle>
                  <CardText>
                    <p>Businesss dude, passionate about tech</p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className = "team-card">
                <CardImg className = "team-image" src={ralphImage} />
                <CardBody>
                  <CardTitle className="techwinx-card-title">Chukwujama Osinachi Victor</CardTitle>
                  <CardText>
                    <p>Techy dude, passionate about VR</p>
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