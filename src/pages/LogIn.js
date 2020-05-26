import React from 'react';
import {useState,setOpen} from 'react';



import '../assets/css/Login.css'
import { Container, Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Form , FormGroup, FormLabel, FormControl } from 'react-bootstrap'


export default class ClickMe extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        style : {
          left : "260px"
        }
       }
    }
    moveAboveLayer = () =>{
      // setOpen(!open);
      this.setState(prevState => {
        let style= Object.assign({},prevState.style);
        style.left = "600px";
        return {style}
    })
    }
    render() {
      // const fade = this.state.fade
      
      return (
          <section className="Login">
            <div className="LoginWrapeer">
              <div className="BellowLayer">
                <Container>
                  <Row>
                    <Col>
                    {/* <Fade in={open}>
        <div id="example-fade-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Fade> */}
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                      <div className="BellowLayerRightPanel">
                        <h1>Are you <br/>student?</h1>
                        <p>Login as a Student</p>
                        <Button 
                          className="ButtonStudentLogin" 
                          // aria-controls="example-fade-text" 
                          // aria-expanded={open} 
                          onClick={this.moveAboveLayer}>
                        LogIn
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="AboveLayer" style={this.state.style}>
                <p style={{fontSize:"40px",paddingLeft:"30px"}}>LOGIN</p>
                <Form className="Form">
                  <FormGroup>
                    
                    <FormControl 
                      className="AboveLayerFormControl" 
                      placeholder="Email">
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      className="AboveLayerFormControl"
                      placeholder="Password"
                    ></FormControl>
                  </FormGroup>
                  <Button className="formSubmitButton">Submit</Button>
                </Form>
              </div>
            </div>
          </section>        
      )
    }
  } 