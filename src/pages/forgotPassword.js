import React from "react";

import {Card, FormControl,FormLabel} from "react-bootstrap"

import '../assets/css/ForgotPass.css'

export default class ForgotPassword extends React.Component{
    render(){
        return(
            <div className="ForgotPass">
                <div className="ForgorPassWrapper">
                    <Card className="ForgorPassWrapperCard">
                        <Card.Body>
                            <Card.Title className="ForgorPassWrapperCardTitle"><h1>Forgot Password</h1></Card.Title>
                            <Card.Text>
                                <FormLabel className="ForgorPassWrapperLabel">Enter Email</FormLabel>
                                <FormControl className="ForgorPassWrapperFormControl"></FormControl>
                                <FormLabel className="ForgorPassWrapperLabel">Enter Password</FormLabel>
                                <FormControl className="ForgorPassWrapperFormControl"></FormControl>
                                <FormLabel className="ForgorPassWrapperLabel">Confirm Password</FormLabel>
                                <FormControl className="ForgorPassWrapperFormControl"></FormControl>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            
            </div>
            
           
        );
    }
}