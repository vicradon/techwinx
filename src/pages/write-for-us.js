import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Layout from '../components/Layout';

const WriteForUsForm = () => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="john@wick.com" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="potentialWriterName">Your Name</Label>
            <Input type="text" name="name" id="potentialWriterName" placeholder="John Wick" />
          </FormGroup>
        </Col>
        <Col sm={12}>
          <FormGroup>
            <Label for="potentialWriterName">Tell us a bit about you</Label>
            <textarea className="textarea" />
          </FormGroup>
        </Col>
      </Row>


      <Button>Send details</Button>
    </Form>
  )
}

const TextContent = () => {
  return (
    <div>
      <h1 className = "header-blue">We need collaborators</h1>
      <p>We are always on the lookout for content creators. If you are interested in tech and would like to get your name out there, feel free to fill the form and contact us.</p>
    </div>
  )
}

const WriteForUs = (props) => {
  return (
    <Layout>
      <style>
        {`
          .textarea {
            display: block;
            width: 100%;
            height: 20rem;
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
          }
        `}
      </style>
      <Container className="pt-5">
        <TextContent />
        <WriteForUsForm />

      </Container>
    </Layout>
  )
}

export default WriteForUs;