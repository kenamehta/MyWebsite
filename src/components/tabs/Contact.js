import React, { Component } from 'react';
import *  as emailjs from 'emailjs-com';
import { Row, Col, Form, Button } from "react-bootstrap";
import configKey from '../../config';

class Contact extends Component {
    state = { text: "", phone: "", email: "", submitButton: true, submitMessage: "" }

    handleChange = e => {
        this.setState({ submitButton: true, submitMessage: "", [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitMessage: "Please wait...", submitButton: false }, () => {
            emailjs.sendForm("gmail", "kenatemplate", "contact-form-class", configKey)
                .then((res) => {
                    this.setState({
                        submitButton: true,
                        submitMessage: "Thank You for sending!",
                        text: "",
                        phone: "",
                        email: ""
                    });
                })
                .catch((err) => {
                    console.log(err)
                    this.setState({
                        submitButton: true,
                        submitMessage: err.text + " Please contact via below channels. Sorry for the inconvenience"
                    });
                })
        });

    }
    render() {
        return (
            <div id="contact_section" className="contact-bg">
                <div className="" style={{ padding: "50px" }}>
                    <h1 className="tabs-heading">
                        <u>Let's talk!</u>
                    </h1>
                </div>
                <Row className="show-grid form-row-style" float="center">
                    <Col className="form-div-style col-lg-5 col-sm-12">
                        <Form id="contact-form-class" onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.email} required name="email" type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phone No.</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.phone} name="phone" type="number" placeholder="[0-9] Optional" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.text} name="text" required as="textarea" rows="4" placeholder="Enter here" />
                            </Form.Group>
                            {
                                this.state.submitButton ?
                                    (
                                        <Button className="submit-button-style" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    ) :
                                    (
                                        <Button disabled className="disable-button-style" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    )
                            }

                            <Form.Group controlId="formBasicPassword">
                                <Form.Text>{this.state.submitMessage}</Form.Text>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="other-contact mt-3" float="center">
                    <div>You can also reach out to me via
                        <a
                            href="https://www.linkedin.com/in/kenamehta/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="e_style"
                                height="30px"
                                src="linkedin.svg" alt="LinkedIn">
                            </img>
                        </a> | <a
                            href="https://github.com/kenamehta"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="e_style"
                                height="25px"
                                src="github_general.png" alt="LinkedIn">
                            </img>
                        </a> | <a
                            href="Resume_Kena_Mehta.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                className="e_style"
                                height="25px"
                                src="resume.png" alt="LinkedIn">
                            </img>
                        </a> | kenamehta.work@gmail.com</div>
                </Row>
            </div>
        );
    }
}

export default Contact;