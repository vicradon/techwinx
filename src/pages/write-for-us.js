import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Layout from '../components/Layout';
import encode from '../utils/encode';
import TechwinxAlert from '../components/TechwinxAlert';


const WriteForUsForm = () => {
  const [on, setOn] = useState(false)
  const [error, setError] = useState(false)

  const initialState = {
    "Email": '',
    "Your Name": '',
    "Tell us a bit about you": ''
  }
  const [formState, setFormState] = useState(initialState);
  
  const handleSubmit = event => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "write-for-us-form", ...formState })
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
      <Form name = "write-for-us-form" onSubmit={handleSubmit} method="post" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="write-for-us-form" />
      <input style={{ visibility: "hidden", padding: "0", margin: "0", height: "1px" }} name="bot-field" />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="writeForUsEmail">Email</Label>
              <Input onChange={handleChange} value={formState["Email"]} type="email" name="Email" id="writeForUsEmail" placeholder="john@wick.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="potentialWriterName">Your Name</Label>
              <Input onChange={handleChange} value={formState["Your Name"]} type="text" name="Your Name" id="potentialWriterName" placeholder="John Wick" />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup>
              <Label for="selfid">Tell us a bit about you</Label>
              <textarea onChange={handleChange} value={formState["Tell us a bit about you"]} required name="Tell us a bit about you" className="textarea" id = "selfid" />
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
      <h1 className="header-blue">We need collaborators</h1>
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
        <p className="pt-1"></p>
        <TextContent />
        <WriteForUsForm />

      </Container>
    </Layout>
  )
}

export default WriteForUs;