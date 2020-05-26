import React from 'react'

import '../assets/css/Login.css'
import { Container, Row, Col} from 'react-bootstrap';

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
                    <Col></Col>
                    <Col>
                      <div>
                        <h3>are you student?</h3>
                        <button onClick={this.moveAboveLayer}>LogIn</button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="AboveLayer" style={this.state.style}>

              </div>
            </div>
          </section>        
      )
    }
  } 