import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import '../assets/css/Registration.css';
import Inputs from '../components/Inputs'


export default class Registration extends React.Component{
    render(){
        return(
            <section className="reg">
                <div className="regWrapper">
                    <h1> Registration </h1>
                    <Card className="regWrapperCard">
                        <Form className="regWrapperForm">
                           <Inputs 
                                label="First Name"  
                                name="FirstName" 
                                type="text" 
                                placeholder="First Name" 
                            />
                           <Inputs 
                                label="Last Name" 
                                name="LastName" 
                                type="text" 
                                placeholder="Last Name" 
                            />
                           <Inputs 
                                label="Email Id" 
                                name="EmailId" 
                                type="email" 
                                placeholder="Email Id" 
                            />
                           <Inputs 
                                label="Username" 
                                name="UserName" 
                                type="text" 
                                placeholder="UserName" 
                            />
                           <Inputs 
                                label="Password" 
                                name="Password" 
                                type="password" 
                                placeholder="Password" 
                            />
                           <Inputs 
                                label="Confirm Password" 
                                name="ConfirmPassword" 
                                type="password" 
                                placeholder="Confirm Password" 
                            />
                        </Form>
                    </Card>
                </div>
            </section>
        )
    }
}