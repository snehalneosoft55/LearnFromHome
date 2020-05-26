import React from 'react';

import '../assets/css/Inputs.css';

import {Container, Row, Col} from 'react-bootstrap';
import { FormControl, Form} from 'react-bootstrap';


export default class Inputs extends React.Component{
    render(){
        return(
            <Form.Group  className="InputWrapper">
                <Container>
                    <Row>
                        <Col xs={2}>
                            <Form.Label className="formLabel">{this.props.label}</Form.Label>
                        </Col>
                        <Col>
                        <FormControl 
                className="InputWrapperFormControl"
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                autoComplete="off"
                onChange = {this.props.handleChange}
                // required
                />
                        </Col>
                    </Row>
                </Container>
                
                {/* <Form.Label className="formLabel">{this.props.label}</Form.Label> */}
                
            </Form.Group>
        )
    }
}