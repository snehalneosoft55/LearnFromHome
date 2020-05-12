import React from 'react';

import '../assets/css/Inputs.css'
import { FormControl, Form } from 'react-bootstrap';


export default class Inputs extends React.Component{
    render(){
        return(
            <Form.Group className="InputWrapper">
                <Form.Label>{this.props.label}</Form.Label>
                <FormControl 
                className="InputWrapperFormControl"
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                autocomplete="off"
                // required
                />
            </Form.Group>
        )
    }
}