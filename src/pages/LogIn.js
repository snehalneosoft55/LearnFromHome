import React from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/Login.css'
import { Container, Row, Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Form , FormGroup, FormControl } from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = 
        { 
            style : {
                        left : "260px"
                    },
            flag:false
        }
    }
    moveAboveLayer = () =>
    {
        this.setState(prevState => 
            {
                let style= Object.assign({},prevState.style);
                style.left = "600px";
                return {style}
            })
    }
    moveAboveLayer1= () => 
    {
        this.setState(prevState => 
            {
                let style= Object.assign({},prevState.style);
                style.left = "200px";
                return {style}
            })
    }
    render() {
      return (
          <section className="Login">
              <div className="LoginWrapeer">
                  <div className="BellowLayer">
                      <Container>
                          <Row>
                              <Col className="BellowLayerLeftPanel">
                                  <div>
                                      <h1>LOGIN FOR <br/>TEACHERS <br></br>🢡 </h1>
                                      <Button 
                                          className="ButtonTeacherLogin"
                                          onClick={this.moveAboveLayer1}
                                      >Click Here
                                      </Button>
                                  </div>
                              </Col>
                              <Col xs={2}></Col>
                              <Col>
                                  <div className="BellowLayerRightPanel">
                                      <h1>LOGIN FOR <br/>STUDENTS<br/>🢠</h1>
                                      <p>If No then Click here</p>
                                      <Button 
                                          className="ButtonStudentLogin" 
                                          onClick={()=>{
                                                          this.setState({flag:true})
                                                        },
                                                          this.moveAboveLayer
                                                  }
                                      >Click Here
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
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                >
                                </FormControl>
                            </FormGroup>
                            <FormGroup>
                                <FormControl
                                className="AboveLayerFormControl"
                                placeholder="Password"
                                />
                            </FormGroup>
                            <Link className="ForgotPasswordLink" to="/ForgotPassword">Forgot Password</Link>
                            <Button className="formSubmitButton">Submit</Button>
                        </Form>
                    </div>
              </div>
          </section>        
      )
    }
  } 