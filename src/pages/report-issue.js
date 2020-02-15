import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Layout from '../components/Layout';
import TechwinxAlert from '../components/TechwinxAlert';
import encode from '../utils/encode';

const ReportIssueForm = () => {
  const [on, setOn] = useState(false)
  const [error, setError] = useState(false)


  const initialState = {
    "Email": '',
    "Your Name": '',
    "What's the issue": ''
  }
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = event => {
    event.preventDefault();

    fetch("/report-issue", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "report-issue", ...formState })
    })
      .then(() => {
        setOn(true)
        setTimeout(() => setOn(false), 3000);
        setFormState(initialState)
        console.log("Success!")
      })
      .catch(error => {
        setError(true)
        setTimeout(() => setError(false), 3000);
        console.log(error)
      });
  }

  const handleChange = e => setFormState({ ...formState, [e.target.name]: e.target.value });

  return (
    <>
      <Form onSubmit={handleSubmit} name="report-issue" method="post" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="report-issue" />
        <input style={{ visibility: "hidden", padding: "0", margin: "0", height: "1px" }} name="bot-field" />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input onChange={handleChange} value={formState["Email"]} required type="email" name="Email" id="exampleEmail" placeholder="john@wick.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="potentialWriterName">Your Name</Label>
              <Input onChange={handleChange} value={formState["Your Name"]} required type="text" name="Your Name" id="potentialWriterName" placeholder="John Wick" />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup>
              <Label for="potentialWriterName">What's the issue</Label>
              <textarea onChange={handleChange} value={formState["What's the issue"]} required name="What's the issue" className="textarea" />
            </FormGroup>
          </Col>
        </Row>

        <Button>Send details</Button>
      </Form>
      {
        on ?
          <div className="mt-3"><TechwinxAlert message="Submitted successfully" color="info" /></div> :
          ''
      }
      {
        error ?
          <div className="mt-3"><TechwinxAlert message="An error occured, please, try again" color="info" /></div> :
          ''
      }
    </>
  )
}

const TextContent = () => {
  return (
    <div>
      <h1 className="header-blue">Report an issue</h1>
      <p>Found any issue within the site? Or would you like to suggest an improvement. Feel free to tell us!</p>
    </div>
  )
}

const ReportIssue = (props) => {
  return (
    <Layout>
      <style>
        {`
          .textarea {
            display: block;
            width: 100%;
            height: 10rem;
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
        <p className="pt-1"></p>
        <TextContent />
        <ReportIssueForm />

      </Container>
    </Layout>
  )
}

export default ReportIssue;